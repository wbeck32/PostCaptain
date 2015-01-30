(function(){

$.ajax({
	url: 'http://localhost:303330/repo'
})
.done(function(data) {
	$(data).appendTo('#projects');
});

})();
