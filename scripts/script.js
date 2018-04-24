// window is the keyword targetting cureent browser
// window.onload asks the browser to wait for the page to load and then run the function(called init in this case)
window.onload = init;
// this is done to avoid complications of function runnig without having the eleements ready and rendered

// function name-of-function will create a function in js file
// function must have a opeing curly brace and a closing one {} similar to css
// the name of a function is followed by brackets ()
function init() {

	// document is the keyword to target the current webpage
	// with queryselecotr we are asking the document to find an element that matches the CSS selector defined in the brackets 
	// here we target #color-1 i.e. element with id color-1
	// onlclick is telling the browser to fire the function "changeColor" when the selected element is clicked 
	
	//document.querySelector('.ham').onclick = showHideMobileMenu;

	// Function to use .ham for hiding and showing mobile navigation
	$('.ham').on('click', function(){

		// .slideToggle(time) is the Jquery function that shows/hides elements with a slide animation 
		// time is speficied to determine the duration of animation
		$('.mobile-nav').slideToggle(500);
	});


	// This checks if the image gallery is present on the page before running the slider_init function 
	if($('.image-gallery').length> 0 ) {

		slider_init();
	}


	// this checks if the html form is present before running the validation
	if($('#htmlForm').length > 0 ) {

		validation_init();
	}

	$('.overlay-container').delay(2000).fadeOut(1000);


}
