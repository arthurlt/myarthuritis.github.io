$(document).ready(function () {
var direct32 = "http://sourceforge.net/projects/elementaryos/files/elementaryos0.1-jupiter-i386.iso/download";
var direct64 = "http://sourceforge.net/projects/elementaryos/files/elementaryos0.1-jupiter-amd64.iso/download";
var torrent32 = "http://downloads.elementaryos.org/elementaryos0.1-jupiter-i386.iso.torrent";
var torrent64 = "http://downloads.elementaryos.org/elementaryos0.1-jupiter-amd64.iso.torrent";

    $('.radio-download').click(function () {
        $('.radio-download').removeClass('radio-checked');
        $(this).addClass('radio-checked');
        return false;
    });
    $('.radio-processor').click(function () {
        $('.radio-processor').removeClass('radio-checked');
        $(this).addClass('radio-checked');
        return false;
    });

$('.radio').click(function () {
if( $('#radio-32bit').hasClass('radio-checked') ) {
	if( $('#radio-direct').hasClass('radio-checked') ) {
		$("#big_button_download").attr('href', direct32);
	}
	if( $('#radio-torrent').hasClass('radio-checked') ) {
		$("#big_button_download").attr('href', torrent32);
	}
}
if( $('#radio-64bit').hasClass('radio-checked') ) {
	if( $('#radio-direct').hasClass('radio-checked') ) {
		$("#big_button_download").attr('href', direct64);
	}
	if( $('#radio-torrent').hasClass('radio-checked') ) {
		$("#big_button_download").attr('href', torrent64);
	}
}
   });
	
});