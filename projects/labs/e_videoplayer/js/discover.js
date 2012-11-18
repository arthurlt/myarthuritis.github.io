$(document).ready(function () {
	var appnumber = $('li.appbaricon').length;
	$('.widlim').css('width', appnumber * 89);
	$('.field-content li').fadeTo(0, 0.75);
	$('.field-content li:first').fadeTo(0, 1).addClass('appbariconactive');
	var firstdiscovername = $('.field-content li a:first').attr('href');
	$('.content_center .content_container').empty().html('<img class="loader" src="/sites/all/themes/elementary/img/loader.gif" />');
	$('.content_center .content_container').load(firstdiscovername + ' #discover-content-start', function () {
		$('#discover-content-start').hide().fadeIn('slow');
		$('video').VideoJS();
		downloadb_actions();
		downloadb_apturl();
		downloadb_os();
		markerhover();
	});
	$('.field-content li a').click(function () {
		if ($(this).parent().hasClass('appbariconactive') == 0) {
			$('.field-content li').removeClass('appbariconactive').fadeTo('fast', 0.75);
			$(this).parent().addClass('appbariconactive').fadeTo('fast', 1);
			$('#spotlightslider').stop().animate({
				left: $(this).offset().left - $('.widlim').offset().left
			});
			var discovername = $(this).attr('href');
			$('.content_center .content_container').empty().html('<img class="loader" src="/sites/all/themes/elementary/img/loader.gif" />');
			$('.content_center .content_container').load(discovername + " #discover-content-start", function () {
				$('#discover-content-start').hide().fadeIn('slow');
				$('video').VideoJS();
				downloadb_actions();
				downloadb_apturl();
				downloadb_os();
				markerhover();
			});
		}
		return false;
	});

	function downloadb_actions() {
		$('.downloadbutton').click(function () {
			$('.download-expand').fadeIn('slow');
			return false;
		});
		$('.download-close').click(function () {
			$('.download-expand').fadeOut('slow');
		});
	}

	function downloadb_apturl() {
		var apturl = $('.downloadbutton').attr('href');
		var sourceurl = $('.downloadcode').attr('href');
		if (apturl == "<none>") {
			$('.downloadbutton').hide();
		}
		if (sourceurl == "<none>") {
			$('.downloadcode').hide();
		}
		$('.d-install').attr('href', apturl);
	}
	$('.field-content li').hover(

	function () {
		$(this).stop().fadeTo('fast', 1);
	}, function () {
		if ($(this).hasClass('appbariconactive') == 0) {
			$(this).stop().fadeTo('fast', 0.75);
		}
	});

	function downloadb_os() {
		if ($.client.os != 'Linux') {
			$('.app .downloadbutton').hide();
		}
	}
	function markerhover() {/*
		$('.appvideo .marker').hide();
		$('.appvideo').hover(function () {
			$('.appvideo .marker').fadeIn('slow');
		}, function() {
			$('.appvideo .marker').fadeOut('slow');
		});*/
		$('.appvideo .marker').hover(function () {
			$(this).addClass("viewed");
			$(this).children(".hoverbox").fadeIn('fast');
		}, function() {
			$(this).children(".hoverbox").fadeOut('fast');
		});
	}
});