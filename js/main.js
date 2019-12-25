is_document_ready = (callback) => {
  if (document.readyState != "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
};

// on document ready
is_document_ready(() => {
  
  let scroll_offset 				= 0,
  		html 									= document.documentElement,
			header 								= document.querySelector('.header'),
			hero 									= document.querySelector('.hero'),
			burger_menu   				= document.querySelector('.burger-menu'),
			header__nav  					= document.querySelector('.header__nav'),
			burger_menu__btn 			= document.querySelector('.burger-menu__btn'),
  		nav__link 						= document.querySelector('.nav__link');
  
  window.onscroll = () => {

  	scroll_offset = window.pageYOffset;

		// fixed header
		if (html.clientWidth > 691) {
		
		  if (scroll_offset >= hero.scrollHeight) {
				header.classList.add('header--fixed');
			} else {
				header.classList.remove('header--fixed');
			};

		} else {
			header.classList.remove('header--fixed');
		};

		let diw = $('.twitter-comment');
		let pos = diw.position().top;
		let scrollPos = $(window).scrollTop();

		//console.log(scrollPos);
		//console.log(pos);
		//console.log();
		

		//if $() {

		//}


  }; //window.onscroll



  window.onresize = () => {
  	//hide burger menu
  	if (html.clientWidth > 691) {
			header__nav.classList.add('nav');
			header__nav.classList.remove('header__nav--active');
			burger_menu__btn.classList.remove('burger-menu__btn--active');
		};
  };  //window.onresize
	
  burger_menu.onclick = () => {
  	burger_menu__btn.classList.toggle('burger-menu__btn--active');
  	header__nav.classList.toggle('nav');
  	header__nav.classList.toggle('header__nav--active');
  	
  };

  //smooth scroll
  let menuLink = $('.header__nav > .nav__link');
  smoothScroll(menuLink);
	
  let filterBtn = $('[data-filter]');
  let portfolioImages = $('.portfolio-images');

  filterBtn.click(function (event) {
  	event.preventDefault();

		let filterCategory = $(this).data('filter');

		if (filterCategory == 'all') {
			portfolioImages.removeClass('selected');
			$('[data-category]').show();
		} else {
			$('[data-category]').each(function () {
				let filterItem = $(this).data('category');
				portfolioImages.addClass('selected');
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

}); // is_document_ready() 

function smoothScroll (DOMelement, time) {
    DOMelement.on("click a", function (event) {
    		if (time == null) time = 1000;
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('html, body').animate({
            scrollTop: top
        }, time);
    });
};