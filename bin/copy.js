var copy = require('directory-copy');

copy(
   { src: '../public'
   , dest: '../../../public'
   , excludes: [/^\./]
   }
  , function () {
   console.log('done!')
})
.on('log', function (ms, level){
   console.log(level + ': ' + ms)
}) 
