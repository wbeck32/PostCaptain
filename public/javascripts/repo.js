(function(){

$.ajax({
	url: 'http://localhost:3030/repo'
})
.done(function(data) {
	$(data).appendTo('#projects');
});

})();
