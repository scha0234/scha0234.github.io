// window is the keyword targetting cureent browser
// window.onload asks the browser to wait for the page to load and then run the function(called init in this case)
window.onload = init;

// this is done to avoid complications of function runnig without having the eleements ready and rendered

// function name-of-function will create a function in js file
// function must have a opeing curly brace and a closing one {} similar to css
// the name of a function is followed by brackets ()
	function init() {
	$(document).ready(function(){
     $(".container").click(function(){
       $(".mobilenav").slideToggle("slow");
    });
     if($('#htmlForm').length > 0 ) {

	validation_init();
	}

	});

}
