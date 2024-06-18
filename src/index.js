import './sass/main.scss';
import { textAnimationFunct } from './app/text-animate';
import { loadNavTemplate } from './app/nav-template';
import { loadFooterTemp } from './app/footer-template';
import { loadImageAssets } from './app/img-assets';

import { loadAboutImgs } from './app/about-img-assets';

import { loadDonateImgs } from './app/support-img-assets';

// loading the templates
document.addEventListener('DOMContentLoaded', () => {
	textAnimationFunct();

	loadNavTemplate();
	loadFooterTemp();

	// calling image assets functions
	loadImageAssets();
	loadAboutImgs();
	loadDonateImgs();
});
