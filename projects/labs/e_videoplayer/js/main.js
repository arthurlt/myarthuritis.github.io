$(document).ready(function () {
	var passvalue = $("#password-clear").attr('value');
	var uservalue = $("#username-clear").attr('value');
	$('input[name=search_theme_form]').addClass("default-search");

		$('span.down-arrow').click(function () {
			$('ul.down-arrow').toggle();
		});

		$('.down-arrow-option a').click(function () {
			$('ul.down-arrow').hide();
		});

		$('input[name=search_theme_form]').focus(function () {
			$(this).removeClass("default-search").attr("value","");
		});

		$('input[name=search_theme_form]').blur(function () {
			if ($(this).val()=="") {
			$(this).addClass("default-search").attr("value","Type to Search...");
			}
		});

		$('.answers .s-question-block input[name=title]').focus(function () {
			$(this).addClass("unitalic").attr("value","");
		});

		$('.answers .s-question-block input[name=title]').blur(function () {
			if ($(this).val()=="") {
			$(this).removeClass("unitalic").attr("value","Type a Question...");
			}
		});

		$('.block-width-half:eq(0)').show();

		$('.s-button:eq(0)').addClass("pressed");
		$('.s-button').click(function () {
			$('.s-button').removeClass("pressed");
			$(this).addClass("pressed");
			if ($('.s-unanswered').hasClass('pressed')) {
				$('.block-width-half').hide();
				$('.block-width-half.unanswered').show();
			}
			if ($('.s-newest').hasClass('pressed')) {
				$('.block-width-half').hide();
				$('.block-width-half.newest').show();
			}
			if ($('.s-popular').hasClass('pressed')) {
				$('.block-width-half').hide();
				$('.block-width-half.popular').show();
			}
		});
		$('.dalogin #edit-pass').hide();
		$('.dalogin #edit-name').hide();
		$(".dalogin #password-clear").focus(function() {
			$(this).hide();  
			$(".dalogin #edit-pass").show().focus();
		});
		$(".dalogin #username-clear").focus(function() {
			$(this).hide();  
			$(".dalogin #edit-name").show().focus();
		});
		$(".dalogin #edit-pass").blur(function() {
			if($(this).val().length == 0)
			{
			   $(this).hide();  
			   $(".dalogin #password-clear").show();
			}      
		});
		$(".dalogin #edit-name").blur(function() {
			if($(this).val().length == 0)
			{
			   $(this).hide();  
			   $(".dalogin #username-clear").show();
			}      
		});

});