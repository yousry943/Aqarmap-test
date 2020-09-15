
jQuery(document).ready(function() {
	
    
  
   
    
    /*
        Form
    */
    $('.registration-form fieldset:first-child').fadeIn('slow');
    
    $('.registration-form input[type="text"], .registration-form input[type="password"], .registration-form textarea').on('focus', function() {
    	$(this).removeClass('input-error');
    });
    
    // next step
    $('.registration-form .btn').on('click', function() {
    	var parent_fieldset = $(this).parents('fieldset');
    	var next_step = true;
		// alert(parent_fieldset.length(".form-top-left"));
	
    	parent_fieldset.find('input[type="text"], input[type="password"], textarea,select').each(function() {
    		if( $(this).val() == "" ) {
    			$(this).addClass('input-error');
    			next_step = false;
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
		});	
		// if ($("fieldset").find('.timer').length) {
			function counter(){		
			$(".timer").countdown360({
				radius      : 20,
				seconds     : 5,
				strokeWidth : 0,
				fillStyle   : '#0276FD',
				strokeStyle : '#003F87',
				fontSize    : 25,
				fontColor   : '#000',
				label :'sec',
				autostart: false,
				startOverAfterAdding: true, 
				onComplete  : function () { 
					// next_step =true;
					// $('.timer').parents("fieldset").fadeOut(400, function() {
					// 	$('.timer').parents("fieldset").next().fadeIn().find(".form-top-left").after("<span class='timer'></span>");
					// })
					// nextQues();
					// return false;
					// evt.preventDefault();
					// alert ($(this).parent().html());
					// next_step = true
					// $('.timer').parents("fieldset").fadeOut(400, function() {
					// 	$(this).next().fadeIn()	
					//  })
					// $('.timer').parents("fieldset").next().show();
					// parent_fieldset.fadeOut(400, function() {
					// $(this).next().fadeIn()	
				//  })
				}
			  }).start();	
		}
	// }

    	if( next_step ) {
    		parent_fieldset.fadeOut(400, function() {
				$(this).next().fadeIn().find(".form-top-left").after("<span class='timer'></span>");
				counter();
	    	});
    	}
	

	function nextQues(){
    
    		parent_fieldset.fadeOut(400, function() {
				$(this).next().fadeIn().find(".form-top-left").after("<span class='timer'></span>");
	    	});
    	
	}
    });
   
    
    // submit
    $('.registration-form').on('submit', function(e) {
    	
    	$(this).find('input[type="text"], input[type="password"], textarea,select').each(function() {
    		if( $(this).val() == "" ) {
    			e.preventDefault();
    			$(this).addClass('input-error');
    		}
    		else {
    			$(this).removeClass('input-error');
    		}
    	});
    	
    });
    
    
});
