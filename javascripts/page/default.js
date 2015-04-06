$(document).ready(function(){



  $('.m-primaryNav__more a').smoothScroll({
		easing: 'swing',
		speed: 'auto',
		autoCoefficient: 6
	});


  $('a.b-footer__return').on('click', function(){

		$.smoothScroll({
	    	easing: 'swing',
	    	speed: 'auto',
	    	autoCoefficient: 6
	  });
		return false;
	});



	

    $('.b-featuredLink').each(function(){
			var i = $(this).children("img").attr("alt");
			$(this).prepend('<h3>' + i + '</h3>');
			$(this).append('<span class="outer"><span class="inner"></span></span>');

			var link = $(this);
			var href = link.attr("href");
			var icon = $(this).find(".inner");
			var target = $(this).attr('target');

			if(target !== undefined && target !== false && target !== '_blank' ){
				$(this).attr('target', '_blank')
			}

			if(href.indexOf("wvu.edu") <= 0){
				$(this).attr('target', '_blank');
				icon.addClass("icon-newtab");
			}if(href.indexOf(".pdf") >= 0){
				icon.addClass("icon-file-pdf");
			}if(href.indexOf("youtube.com") >= 0){
				icon.addClass("icon-youtube2");
			}if(href.indexOf(".doc", ".docX", ".dotx", ".dotm", ".dot", ".docm", ".docb") >= 0){
				icon.addClass("icon-file-word");
			}if(href.indexOf(".xls", ".xlt", ".xlm", ".xlsx", ".xlsm", ".csv", ".xltx", ".xltm", ".xla", ".xlam") >= 0){
				icon.addClass("icon-file-excel");
			}if(href.indexOf(".ppt", ".pot", ".pps", ".pptx", ".pptm", ".potx", ".potm", ".ppam", ".ppsx", ".ppsm", ".sldx", ".sldm") >= 0){
				icon.addClass("icon-file-powerpoint");
			}if(href.indexOf(".zip", ".7z", ".s7z", ".cab", ".dmg", ".jar", ".rar", ".tar", ".xar", ".zipx") >= 0){
				icon.addClass("icon-file-zip");
			}else{
				icon.addClass("icon-arrow-right")
			}
		});





    svgeezy.init(false, 'png');




	$('#postfix--thumbs').perfectScrollbar({
		suppressScrollY: true,
		minScrollBarLength: 167
	});

	$('#m-homeScroller--thumbs').perfectScrollbar({
		suppressScrollY: true,
		minScrollBarLength: 167
	});

	overthrow.sidescroller(
   document.querySelectorAll( ".overthrow-enabled .m-scroller__thumbs--wrapper" ), {
		disableNav: true,
		fixedItemWidth: true
		});

	overthrow.sidescroller(
   document.querySelectorAll( ".overthrow-enabled .m-homeScroller__thumbs--wrapper" ), {
		disableNav: true,
		fixedItemWidth: true
		});


});//end requireJS
