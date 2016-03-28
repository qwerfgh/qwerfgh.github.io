var AW = (function($) {

	var init = function() {

		// trips functionality
		if(typeof Testimonials !== 'undefined') 
			Testimonials.init();

			// replace svg with raw svg code
			jQuery('img.svg-raw').each(function(){
	            var $img = jQuery(this);
	            var imgID = $img.attr('id');
	            var imgClass = $img.attr('class');
	            var imgURL = $img.attr('src');

	            jQuery.get(imgURL, function(data) {
	                // Get the SVG tag, ignore the rest
	                var $svg = jQuery(data).find('svg');

	                // Add replaced image's ID to the new SVG
	                if(typeof imgID !== 'undefined') {
	                    $svg = $svg.attr('id', imgID);
	                }
	                // Add replaced image's classes to the new SVG
	                if(typeof imgClass !== 'undefined') {
	                    $svg = $svg.attr('class', imgClass+' replaced-svg');
	                }

	                // Remove any invalid XML tags as per http://validator.w3.org
	                $svg = $svg.removeAttr('xmlns:a');

	                // Replace image with new SVG
	                $img.replaceWith($svg);

	            }, 'xml');

	        });



	//contact form send

	};

	var toggleOpen = function(selector, newClass) {

		$(selector).toggleClass(newClass);

	}

	var scrollTo = function(id) {
		
		// Stop any currently active scroll
		$('html, body').dequeue();
		// Scroll to #id offset by 90 pixels
		$('html, body').animate({ scrollTop: $(id).offset().top-80 }, 1000, 'easeOutExpo');
	
	};
	
	return {
		init: init,
		scrollTo: scrollTo,
		toggleOpen: toggleOpen
	};

}(jQuery));

$(function() {
	AW.init();
});