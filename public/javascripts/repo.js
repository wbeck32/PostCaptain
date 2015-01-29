(function(){

$.ajax({
	url: 'http://localhost:3000/repo'
})
.done(function(data) {
	$(data).appendTo('#projects');
});

})();