var express = require('express');
var router = express.Router();
var fs = require('fs');
var config = require('../config.json');
var __dirname = './public/projects/';
var fText = [];
var fileNames = [];
var fileReader = function (index, file) {
	fs.readFile(file, function(err, data){
		fText[index] = data;
		index++;	
		interator(index);
	});
}
var interator = function(index){				
		if (index < fileNames.length) {
			
			fileReader(index,__dirname+fileNames[index]);
		}
		else{
			router.get('/repo', function(req,res,next){ 
				res.render('repo', {content: fText.join('')});
			});
			
		}
	}

var fileTrawler = function(){
	fs.readdir(__dirname, function(err,files) {		
		fileNames = files;
		if (err){
			throw err;
		} 
		else {
				var index = 0
				fileReader(index, __dirname+fileNames[index]);
		}		

	});
}

/* GET home page. */
router.get('/', function(req, res, next) {
	fileTrawler();
  res.render('index', { title: config.locals.title, bodytitle: config.locals.name, description: config.locals.description, owner: config.locals.owner });
});



module.exports = router;