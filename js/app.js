$(document).ready(function(){
  $('.parallax').parallax();
  $(".button-collapse").sideNav();
});

//Cambio de letra parte principal
$(function(){
	
	const title = $("#title")

	// Shuffle the contents of container
	title.shuffleLetters();

	// Leave a 4 second pause
	setTimeout(function(){
		
		// Shuffle the container with custom text
		title.shuffleLetters({
			"text": "FronteEnd Developer and Product Owner!"
		});
  },4000);
});
