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
	  autoplay: true,
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

	$('.slider-yellow').slick({
	  dots: false,
	  //autoplay: true,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 5,
	  slidesToScroll: 1,
	  prevArrow: '<button type="button" class="slick-prev-yellow-slider"></button>',
	  nextArrow: '<button type="button" class="slick-next-yellow-slider"></button>',
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	        slidesToShow: 4
	      }
	    },
	    {
	      breakpoint: 992,
	      settings: {
	        slidesToShow: 3
	      }
	    },
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1
	      }
	    }
	  ]
	});

	$('.slot-video-slider').slick({
	  dots: false,
	  infinite: true,
	  speed: 300,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  prevArrow: '<button type="button" class="slick-video-prev"></button>',
	  nextArrow: '<button type="button" class="slick-video-next"></button>'
	 	});

	//Nice select
	$('.custom-select').niceSelect();

});
