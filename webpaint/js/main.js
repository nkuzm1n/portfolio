$( function () {

	let header 			   = $('.header'),
			menuBtnWrapper = $('.menu__btn-wrapper'),
			menuBtn 			 = $('.menu__btn'),
			nav 					 = $('.nav'),
			scrollOffset 	 = 0;

	let filterBtn = $('[data-filter]');

	menuBtn.on('click', function () {
		menuBtn.toggleClass('menu__btn--active');
		nav.toggleClass('nav--active');
		$('body').toggleClass('body-locked');
	});

	$(window).on('scroll resize load', function () {
		let documentScrollTop = $(document).scrollTop(),
				windowWidth 	    = $(this).innerWidth(),
				introHeight       = $('.intro').innerHeight(),
				headerHeight			= header.innerHeight();

		if (windowWidth > 768) {
			nav.removeClass('nav--active');
			menuBtn.removeClass('menu__btn--active');
			$('body').removeClass('body-locked');
		}
		if (documentScrollTop >= (introHeight - headerHeight / 2)) {
			header.addClass('header--fixed');
		} else {
			header.removeClass('header--fixed');
		}

	}); // window.on 'scroll resize load' closed

	filterBtn.on('click', function () {

		let filterCategory = $(this).data('filter');

		if (filterCategory == 'all') {
			$('[data-category]').show();
		} else {
			$('[data-category]').each(function () {
				let filterItem = $(this).data('category');
				if (filterCategory != filterItem) {
					$(this).hide();
				} else {
					$(this).show();
				}
			});
		}

		filterBtn.removeClass('portfolio-nav__filter-item--selected');
		$(this).addClass('portfolio-nav__filter-item--selected');
	
	}); // filterBtn closed




}); // Jquery closed
