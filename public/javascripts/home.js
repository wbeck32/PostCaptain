(function(){

$.ajax({
	url: 'http://localhost:3000/home'
})
.done(function(data) {
	$(data).appendTo('#projects');
});

})();