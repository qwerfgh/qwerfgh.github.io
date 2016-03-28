var Testimonials = (function($) {

	var $slider;
	var $sliderNav;

	var slideCur = 2;
	var slideNext = 2;
	var slideTotal = 0;

	var init = function() {

		// cache selectors
		$slider = $('#testimonial-slider');
		$sliderNav = $('#testimonial-nav');

		// set slide total
		slideTotal = $slider.find('.testimonial-slide').length - 1;

		// set default slide states
		$slider.find('.testimonial-slide').each(function(index) {

			if(index != 2) $(this).fadeOut(0);

		});

		// set first testimonial nav active
		$sliderNav.find('a.client:eq(2)').addClass('active');
		
		// set listener for testimonial nav
		$sliderNav.on("click", "a.client", goToItem);
		
	};

	var myVar = setInterval(function() {
		// set up correct indexes of next slide
		slideCur = slideNext;
		slideNext = slideNext == slideTotal ? 0 : slideNext + 1;
		
		// animate to new item
		animateTestimonials();

	}, 1000);
	/*setInterval(function(){alert("Hello")},3000);*/



	var goToItem = function(e) {

		// make sure current item doesn't get double clicked
		if(slideNext == $(this).index('.client')) return;

		// animate to new item
		slideCur = slideNext;
		slideNext = $(this).index('.client');
		console.log(slideNext);

		// animate to new item
		animateTestimonials();
		
		clearInterval(myVar);
		myVar = setInterval(function() {
			// set up correct indexes of next slide
			slideCur = slideNext;
			slideNext = slideNext == slideTotal ? 0 : slideNext + 1;
			
			// animate to new item
			animateTestimonials();
		}, 1000) ;

	};

	var previous = function() {

		// set up correct indexes of next slide
		slideCur = slideNext;
		slideNext = slideNext == 0 ? slideTotal : slideNext - 1;

		// animate to new item
		animateTestimonials();

	};

	var next = function() {

		// set up correct indexes of next slide
		slideCur = slideNext;
		slideNext = slideNext == slideTotal ? 0 : slideNext + 1;
		
		// animate to new item
		animateTestimonials();

	};

	var animateTestimonials = function() {

		// cache selectors
		var $sliderNext = $slider.find('.testimonial-slide:eq(' + slideNext + ')');
		var $sliderCur = $slider.find('.testimonial-slide:eq(' + slideCur + ')');

		// fade slides
		$sliderNext.fadeIn(400);
		$sliderCur.fadeOut(400);

		$('#testimonial-name').html($sliderNav.find('a.client:eq(' + slideNext + ')').data('client'));

		// adjust testimonial nav
		$sliderNav.find('a.client').removeClass('active');
		$sliderNav.find('a.client:eq(' + slideNext + ')').addClass('active');


	};

	return {
		init: init,
		next: next,
		previous: previous
	};

}(jQuery));