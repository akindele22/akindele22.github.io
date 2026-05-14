/*
	Main JS — Massively by HTML5 UP (adapted)
	Handles: preload removal, smooth scroll, scroll-triggered reveals
*/

(function ($) {

	'use strict';

	// Remove preload class after page load
	$(window).on('load', function () {
		window.setTimeout(function () {
			$('body').removeClass('is-preload');
			$('#wrapper').removeClass('is-preload');
		}, 100);
	});

	// Smooth scroll for elements with class .scrolly
	$('.scrolly').on('click', function (e) {
		var $this   = $(this);
		var target  = $this.attr('href');
		if (!target || target === '#') return;
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $(target).offset().top
		}, 600, 'swing');
	});

	// Fade-in on scroll using IntersectionObserver
	var observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add('visible');
				observer.unobserve(entry.target);
			}
		});
	}, { threshold: 0.1 });

	document.querySelectorAll('#main article, #main section.posts > article').forEach(function (el) {
		el.style.opacity = '0';
		el.style.transform = 'translateY(20px)';
		el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
		observer.observe(el);
	});

	// Add visible class handler via CSS
	var style = document.createElement('style');
	style.innerHTML = '.visible { opacity: 1 !important; transform: translateY(0) !important; }';
	document.head.appendChild(style);

	// Nav active link highlight on scroll
	var sections = document.querySelectorAll('[id]');
	window.addEventListener('scroll', function () {
		var scrollY = window.pageYOffset;
		sections.forEach(function (current) {
			var sectionHeight = current.offsetHeight;
			var sectionTop    = current.offsetTop - 60;
			var sectionId     = current.getAttribute('id');
			var navLink       = document.querySelector('#nav ul.links a[href="#' + sectionId + '"]');
			if (navLink) {
				if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
					navLink.parentElement.classList.add('active');
				} else {
					navLink.parentElement.classList.remove('active');
				}
			}
		});
	});

})(jQuery);
