$(document).ready(function() {
	
	//Mob menu
	$('.mob-menu-btn').click(function() {
		$('.menu').slideToggle('fast');
	});

	$(window).resize(function() {
		$('.menu').hide();
		if ($(window).width() > 768) {
			$('.menu').show();
		}
	});

	//Sliders
	$('.slider-main').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: '<button type="button" class="slick-prev"></button>',
	  nextArrow: '<button type="button" class="slick-next"></button>',
	  responsive: [
	    {
	      breakpoint: 1300,
	      settings: {
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        arrows: false
	      }
	    }
	  ]
	});

});
