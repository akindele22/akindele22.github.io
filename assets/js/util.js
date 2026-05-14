/*
	util.js — Massively by HTML5 UP
	Utility helpers
*/

(function ($) {

	'use strict';

	// Placeholder for utility functions used by the theme.
	// Breakpoint detection
	window.breakpoints = {
		active: function (query) {
			return window.matchMedia(query).matches;
		}
	};

	// Polyfill for requestAnimationFrame
	window.requestAnimationFrame = window.requestAnimationFrame
		|| window.mozRequestAnimationFrame
		|| window.webkitRequestAnimationFrame
		|| window.msRequestAnimationFrame
		|| function (f) { return setTimeout(f, 1000 / 60); };

})(jQuery);
