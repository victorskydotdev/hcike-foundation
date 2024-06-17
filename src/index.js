import './sass/main.scss';
import { loadNavTemplate } from './app/nav-template';
import { loadFooterTemp } from './app/footer-template';
import { loadImageAssets } from './app/img-assets';

import { loadAboutImgs } from './app/about-img-assets';

// loading the templates
document.addEventListener('DOMContentLoaded', () => {
	loadNavTemplate();
	loadFooterTemp();

	// calling image assets functions
	loadImageAssets();
	loadAboutImgs();
});
