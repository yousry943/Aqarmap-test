$(document).ready(function(){
	$('input:not([type="submit"])').on('focus', function() {
		$(this).siblings('.input-pholder').addClass('pholder-top focusIn');
		$(this).addClass('input-focus-color');
		$(this).siblings('.showPassImg').show();
	}).on('focusout', function() {
		$(this).removeClass('input-focus-color');
		if($(this).siblings('.input-pholder').hasClass('integerLength')) {
			return false;
		}
		$(this).siblings('.input-pholder').removeClass('pholder-top focusIn');
		
		$(this).siblings('.showPassImg').hide();
	});



	$('input:not([type="submit"])').on('input', function() {
		let inputLength = $(this).val().length;
		if(inputLength > 0) {
			$(this).siblings('.input-pholder').addClass('pholder-top integerLength');
			$(this).siblings('.input-pholder').removeClass('focusIn');
			$(this).siblings('.showPassImg').show();
			$(this).removeClass('input-focus-color');

			$(this).css('border-color', '#e9eaec');
			$(this).siblings('.invalid-text').hide();
		} else {
			$(this).siblings('.input-pholder').removeClass('pholder-top integerLength focusIn');
			$(this).removeClass('input-focus-color');
			$(this).siblings('.showPassImg').hide();
		}
	});

	$('.showPassImg').on('click', function() {
		var passInput = $(this).siblings('input');
		var visibleImage = $(this);
		if($(passInput).is(':password')) {
			$(passInput).get(0).type = 'text';
			$(visibleImage).attr('src', 'img/invisible.png')
		} else {
			$(passInput).get(0).type = 'password';
			$(visibleImage).attr('src', 'img/visible.png')
		}
	});

	$('.register-forget span').on('click', function() {
		let formId = $(this).attr('related-form');
		$('.widget-form').hide();
		$('#' + formId).fadeIn();
		$('input:not([type="submit"])').css('border-color', '#e9eaec');
		$('.invalid-text').hide();
	});

/* 	$('.signup-btn').on('click', function() {
		$(this).hide();
		$('.forgetpass-btn').hide();
		$('.signin-btn').show();
	});
	$('.signin-btn').on('click', function() {
		$(this).hide();
		$('.forgetpass-btn, .signup-btn').show();

	});
	$('.forgetpass-btn').on('click', function() {
		$(this).hide();
		$('.signup-btn, .signin-btn').show();
	}); */

	
	
});

