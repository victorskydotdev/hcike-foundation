import firstHeroImg from '../assets/girl-child.jpeg';
import secHeroImg from '../assets/medical-practitioner-with-patient.jpeg';
import thirdHeroImg from '../assets/img-bg.jpeg';

const imgWrapOne = document.querySelector('.hero1');
const imgWrapTwo = document.querySelector('.hero2');
const imgWrapThree = document.querySelector('.hero3');

const heroTemplateOne = `
	<img src=${firstHeroImg} alt="">
`;
const heroTemplateTwo = `
	<img src=${secHeroImg} alt="">
`;
const heroTemplateThree = `
	<img src=${thirdHeroImg} alt="">
`;
// end of hero section images

import firstSvgIcon from '../assets/icon1.svg';
import secondSvgIcon from '../assets/icon2.svg';
import thirdSvgIcon from '../assets/icon3.svg';

// landing page second section
const secLayoutBgWarp = document.querySelector('.second-layout-bgwrap');
const iconOne = document.querySelector('.icon1-wrap');
const iconTwo = document.querySelector('.icon2-wrap');
const iconThree = document.querySelector('.icon3-wrap');

// icons
const iconOneTemplate = `
  <img src=${firstSvgIcon} alt="">
`;
const iconTwoTemplate = `
  <img src=${secondSvgIcon} alt="">
`;
const iconThreeTemplate = `
  <img src=${thirdSvgIcon} alt="">
`;
// end of second layout section images

// what we do images
import humanitImage from '../assets/humanitarian.jpeg';
import healthImage from '../assets/health.jpeg';
import carvicalImage from '../assets/carvical.jpeg';
import prostateImage from '../assets/prostate.jpeg';

const wwdImgOne = document.querySelector('.wwd-img-one');
const wwdImgTwo = document.querySelector('.wwd-img-two');
const wwdImgThree = document.querySelector('.wwd-img-three');
const wwdImgFour = document.querySelector('.wwd-img-four');

const wwdTempOne = `
  <img src=${humanitImage} alt="">
`;
const wwdTempTwo = `
  <img src=${healthImage} alt="">
`;
const wwdTempThree = `
  <img src=${carvicalImage} alt="">
`;
const wwdTempFour = `
  <img src=${prostateImage} alt="">
`;
// end of what we do images section

// who we are section
// === using already exisiting images imports
import brandImage from '../assets/footer-logo.png';
const positionBrandWrap = document.querySelector('.positioned-brand-wrap');
const wwaImgWrap = document.querySelector('.wwa-img-wrap');

const posElemtTemp = `
  <img src=${brandImage} alt="">
`;
// end of who we are section

// where we work image assets
import mensHealthImg from '../assets/men-healthcare.jpeg';

const childrenImgWrap = document.querySelector('.children-img-wrap');
const womenImgWrap = document.querySelector('.women-img-wrap');
const menImgWrap = document.querySelector('.men-img-wrap');

const childrenTemp = `
  <img src=${firstHeroImg} alt="">
`;
const menTemp = `
  <img src=${mensHealthImg} alt="">
`;
const womenTemp = `
  <img src=${secHeroImg} alt="">
`;
// end of where we work imge assets

// function to load all the image assets
const loadImageAssets = () => {
	if (
		imgWrapOne ||
		imgWrapThree ||
		imgWrapThree ||
		secLayoutBgWarp ||
		iconOne ||
		iconTwo ||
		iconThree ||
		wwdImgOne ||
		wwdImgTwo ||
		wwdImgThree ||
		wwdImgFour ||
		wwaImgWrap ||
		positionBrandWrap ||
		childrenImgWrap ||
		womenImgWrap ||
		menImgWrap
	) {
		imgWrapOne.innerHTML += heroTemplateOne;
		imgWrapTwo.innerHTML += heroTemplateTwo;
		imgWrapThree.innerHTML += heroTemplateThree;

		secLayoutBgWarp.innerHTML += heroTemplateTwo;

		iconOne.innerHTML += iconOneTemplate;
		iconTwo.innerHTML += iconTwoTemplate;
		iconThree.innerHTML += iconThreeTemplate;

		wwdImgOne.innerHTML += wwdTempOne;
		wwdImgTwo.innerHTML += wwdTempTwo;
		wwdImgThree.innerHTML += wwdTempThree;
		wwdImgFour.innerHTML += wwdTempFour;

		positionBrandWrap.innerHTML += posElemtTemp;
		wwaImgWrap.innerHTML += heroTemplateThree;

		childrenImgWrap.innerHTML += childrenTemp;
		womenImgWrap.innerHTML += womenTemp;
		menImgWrap.innerHTML += menTemp;
	}
};

export { loadImageAssets };
