// activeThumbIndex is a global variable created to be accessed by changeSlide and autoSlider functions 
// This represents the index of the currently activated Thumbnail
var activeThumbIndex = 0;

// document.querySelector('#color-1').style.backgroundColor="green";

// window is the keyword targetting cureent browser

// this is done to avoid complications of function runnig without having the eleements ready and rendered

// function name-of-function will create a function in js file
// function must have a opeing curly brace and a closing one {} similar to css
// the name of a function is followed by brackets ()
function slider_init() {

	// $('.class-selector') selects all the elements with this class 
	// This is also similar to document.querySelectorAll in Javascript
	// .on("event", function(){}) is the keyword to access events for this specific set of elements 
	// where event can be "click", "mouseover", "focus", "mouseout" etc. 
	// function is the set of rules that will be excuted when the above specified event happens 
	// In this case we are targetting the "click" event 
	$('.img-slide-thumb').on('click', function(){
		// $(this) is used to target the current element that is being clicked 
		// .attr("attribute-name") is used to access attributes of this element
		// var targetSlide = $(this).attr('data-target');

		var thisThum = this;
		changeSlide(thisThum);

	});

	autoSlider();
}



// to change the slides when image thumbnails are clicked as well as using auto slider
// changeSLide function uses "currentThumb" acceptor variable to get the "this" value from .on('click') event where it is called from 
function changeSlide(currentThumb) {

	var targetSlide = $(currentThumb).attr('data-target');
	// Target all image slides 
	var slideImages = document.querySelectorAll('.img-slide');
	var imageThumbs = document.getElementsByClassName('img-slide-thumb');

	// array imageThumbs = ['img-thumb-1', 'img-thumb-2', 'img-thumb-3']
	// index of img-thumb-1 = 0
	// index of img-thumb-2 = 1
	// index of img-thumb-3 = 2

	for(var j = 0; j < imageThumbs.length; j++ ) {
		// .classList gives Javascript access to all the classes if this specific element
		// .remove function is used to remove the given class from the above accessed class list
		imageThumbs[j].classList.remove('img-slide-thumb-active');

		if(imageThumbs[j] == currentThumb) {
			activeThumbIndex = j;
		}
	}


	// for loop to loop through all the image slides and hide them using style.display
	// for(var i = 0; i < slideImages.length; i++) {

		// slideImages[i].style.display="none";
	// }

	// .fadeOut(time) is a jQuery function used to hide elements 
	// time is the amount of time the amimation runs before the element is comepletely hidden
	// here 500 is 500 milliseconds
	// .removeClass is a jquery alternative for .classList.remove()
	 $('.img-slide').removeClass('active');
	$('.img-slide').fadeOut(800, function() {
		//$(this).removeClass('active');	
	});



	// we access the slide that is associated with the current clicked Thumbnail and make it active
	// here ("#"+targetSlide) will have different values depnding upon which thumbnail is clicked
	// ("#"+'img-slide-1') or ("#"+'img-slide-2') or ("#"+'img-slide-3');
	// + is used to concatenate strings and javascript variables
	// document.querySelector('#'+targetSlide).style.display="block";

	// .fadeIn(time) is a jQuery function used to show elements 
	// time is the amount of time the animation is run before the element is completely displayed
	$('#'+targetSlide).fadeIn(1200, function(){
		$(this).addClass('active');
	});
	// .addClass is Jquery alternative to add a class
	// $('#'+targetSlide).addClass('active');

	currentThumb.classList.add('img-slide-thumb-active');

}

// autoSlider Calls the changeSlide() function and makes the images move automatically
function autoSlider() {

	var slideThumbs = document.querySelectorAll('.img-slide-thumb');
	// by default activeThumbIndex = 0 
	// therefore the accessed Thumnail will be 'img-slide-thumb-1' or the first thumbnail in the slideThumbs array
	changeSlide(slideThumbs[activeThumbIndex]);
	activeThumbIndex++;
	// in this case when activeThumbIndex becomes 2 we want it to switch back to 0
	if(activeThumbIndex == slideThumbs.length) {activeThumbIndex = 0};

	// setTimout(functionName, repeat-after-milliseconds) function calls the given function after the speficied time and makes an infinite looping functionality 
	setTimeout(autoSlider, 3000);
}