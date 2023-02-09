$( document ).ready(function() {
	$('#404ErrorPage').waitForImages(function() {
	$('#404ErrorPage').fadeIn("slow");
	$('.preloader').fadeOut("slow");
	// ParallaxJS
	var scene = document.getElementById('404ErrorPage');
	var parallax = new Parallax(scene, {
		selector: '.layer'
	});
}, $.noop, true);
});