import './sass/main.scss';
import { textAnimationFunct } from './app/text-animate';
import { loadNavTemplate } from './app/nav-template';
import { loadFooterTemp } from './app/footer-template';
import { loadImageAssets } from './app/img-assets';

import { loadAboutImgs } from './app/about-img-assets';

import { loadDonateImgs } from './app/support-img-assets';

import {
	accordionFunct,
	expandLayout,
	expandContentBox,
} from './app/accordion';

import { loadModal } from './app/learn-more-modal';

import { loadContactImgs } from './app/contact-script';

import { runAlertFuncts } from './app/alerts';

import { submitForm } from './app/form-handling';

// loading the templates
document.addEventListener('DOMContentLoaded', () => {
	textAnimationFunct();

	loadNavTemplate();
	loadFooterTemp();

	// calling image assets functions
	loadImageAssets();
	loadAboutImgs();
	loadDonateImgs();

	accordionFunct();
	expandLayout();
	expandContentBox();

	loadModal();
});

loadContactImgs();
runAlertFuncts();
submitForm();
