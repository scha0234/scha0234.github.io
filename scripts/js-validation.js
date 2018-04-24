function validation_init(){

	$('#submitbtn1').on('click', function(event){
		event.preventDefault();

		var required_error = required_check();
		var validate_error = validate_input();

		if(!required_error && !validate_error) {
			alert('You have successfully completed the form');
		} else {
			alert('There are errors in the form');
		}
	});
}

function required_check() {

	var required_inputs = $('.required input, .required textarea');
	var has_error = false;

	$.each(required_inputs, function(input_index, req_input) {
		

		var required_container = $(req_input).closest('.input-container');
		var input_label = $(required_container).find('.label-text').text();
		var feedback = $(required_container).find('.feedback');
		var input_val = $(req_input).val().trim();

		console.log("Label:"+input_label);
		console.log("Value:"+input_val);
		$(feedback).fadeOut(0);
		if(input_val=='') {

			console.log('empty value')

			$(required_container).addClass('has-error');
			$(required_container).removeClass('has-success');
			has_error = true;
			$(feedback).text('A value is required for "'+input_label+'"');

		} else {
			console.log('entered value');
			$(required_container).addClass('has-success');
			$(required_container).removeClass('has-error');
			$(feedback).text('  ');
		}
		$(feedback).fadeIn(300);
	});

	var required_checkbox_containers = $('.required-checkbox');

	$.each(required_checkbox_containers, function(req_check_container_index, req_check_container){

		var required_checkboxes = $(req_check_container).find('input[type=checkbox]');
		var checkbox_feedback = $(req_check_container).find('.feedback');
		var checkbox_label = $(req_check_container).find('.label-text').text();
		var check_counter = 0;

		$(checkbox_feedback).fadeOut(0);

		$.each(required_checkboxes, function(req_check_index, req_check){
			console.log($(req_check).prop('checked'));

			if($(req_check).prop('checked')) {
				check_counter++;
			}
		});

		if(check_counter>0) {
			$(req_check_container).addClass('has-success');
			$(req_check_container).removeClass('has-error');
			$(checkbox_feedback).text('   ')

		} else {
			$(req_check_container).removeClass('has-success');
			$(req_check_container).addClass('has-error');
			$(checkbox_feedback).text('This field is required');
			has_error = true;

		}

		$(checkbox_feedback).fadeIn(300);
	});

	return has_error;
}

function validate_input() {

	var validate_inputs = $('.validate input');
	var validation_error = false;

	$.each(validate_inputs, function(input_index, validate_input) {

		var validate_container = $(validate_input).closest('.input-container');
		var input_label = $(validate_container).find('.label-text').text();
		var input_val = $(validate_input).val().trim();
		var feedback = $(validate_container).find('.feedback');
		var validation_type = $(validate_input).attr('data-validation-type');
		var feedback_text = "";
		var has_error = false;
		if(input_val!='') {

			$(feedback).fadeOut(0);

			if(validation_type=='email') {
				pattern = /(.+)@(.+){2,}\.(.+){2,}/;

				if(!input_val.match(pattern)) {
					feedback_text = 'only valid email address allowed for "'+input_label+'"';
					has_error = true;

				}
			}

			if(has_error) {
				$(validate_container).removeClass('has-success');
				$(validate_container).addClass('has-error');
				validation_error = true;
			} else {
				$(validate_container).removeClass('has-error');
				$(validate_container).addClass('has-success');
				
 			}

			$(feedback).html(feedback_text);
			$(feedback).fadeIn(300);
		}

	});

	return validation_error;

}