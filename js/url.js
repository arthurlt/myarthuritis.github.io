$(document).ready(function () {
	var urlbit = window.location.pathname;
	var splitcheck = urlbit.split('/');
	var firsturl = $('.appbaritem:eq(0) a').attr('href');
	var splitfirst = firsturl.split('/');
	$('.dock-icons').click(function() {
		var newpath = $(this).children('').attr('href');
		window.history.pushState(0, document.title, newpath);
		return false;
	});
	//$('.discover-page .modebutton-button').click(function() {
	//	$('.discover-page .modebutton-button').removeClass('pressed');
	//	var newpath = $(this).attr('href');
	//	var splitpath = newpath.split('/');
	//	$(this).addClass('pressed');
	//	$('#loaded-view-wrapper').empty().load("/discover/+/ajax/"+splitpath[2]+"/"+splitpath[3]);
	//	window.history.pushState(0, document.title, newpath);
	//	return false;
	//});
	
});