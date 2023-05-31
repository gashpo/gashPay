/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-tick': '&#xe90a;',
		'icon-link': '&#xe901;',
		'icon-pay': '&#xe902;',
		'icon-secure': '&#xe903;',
		'icon-shop': '&#xe904;',
		'icon-subscription': '&#xe905;',
		'icon-fast': '&#xe906;',
		'icon-credit-card': '&#xe907;',
		'icon-bank': '&#xe908;',
		'icon-atm': '&#xe909;',
		'icon-Group-4': '&#xe900;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
