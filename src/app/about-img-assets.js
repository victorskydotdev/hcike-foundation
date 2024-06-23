import aboutHeroImg1 from '../assets/blurred-bg.svg';
import aboutHeroImg2 from '../assets/people-heart.svg';

const aboutHeroImgWrap = document.querySelector('.about-img-wrap');
const aboutPositionedImgWrap = document.querySelector('.about-positioned-img');

// template
const aboutHeroImgTemp = `
  <img src=${aboutHeroImg2} alt="">
`;

const aboutPostionedImgTemp = `
  <img src=${aboutHeroImg1} alt="">
`;
// end of hero section image import

// medical team imports
import medicalTeamImg from '../assets/medical-team.png';

const medicalTeamImgWrap = document.querySelector('.second-section-imgwrap');

const medicalImgTemp = `
  <img src=${medicalTeamImg} alt="" />
`;
// end of medical team imports

// intro section
import missionImg from '../assets/medical-practitioner.jpg';
const introBgWrap = document.querySelector('.intro-bg-wrap');
const missionImgWrap = document.querySelector('.mission-img-wrap');

const introBgTemp = `
  <img src=${medicalTeamImg} alt="" />
`;

const missionImgTemp = `
  <img src=${missionImg} alt="medical practitioner" />
`;
// end of intro section

// importing core valaues and founding team image assets
import compassionPng from '../assets/compassionate.png';
import excellencePng from '../assets/excellence.png';
import collaborationPng from '../assets/collaboration.png';
import sustainabilityPng from '../assets/sustainability.png';
import accessibilityPng from '../assets/key.png';
const compassionTemp = `	<img src=${compassionPng} alt="" />
`;
const excellenceTemp = `	<img src=${excellencePng} class="excell" alt="" />
`;
const collaborationTemp = `	<img src=${collaborationPng} class="collab" alt="" />
`;
const sustainabilityTemp = `	<img src=${sustainabilityPng} alt="" />
`;
const accessibilityTemp = `	<img src=${accessibilityPng} alt="" />
`;

const compassWrap = document.querySelector('.compass-wrap');
const excellWrap = document.querySelector('.excell-wrap');
const collabWrap = document.querySelector('.collab-wrap');
const sustainWrap = document.querySelector('.sustain-wrap');
const accessWrap = document.querySelector('.access-wrap');

import teamImgOne from '../assets/team-img1.png';
import teamImgTwo from '../assets/team-img2.jpg';
const teamOneTemp = `<img src=${teamImgOne} alt="" />`;
const teamTwoTemp = `<img src=${teamImgTwo} alt="" />`;

const teamOneWrap = document.querySelector('.team-one-wrap');
const teamTwoWrap = document.querySelector('.team-two-wrap');
// end of core values and founding team image assets import

// accordion section images
import accordionOneImg from '../assets/team-img1.png';
import accordionTwoImg from '../assets/team-img1.png';
const accordionOneTemp = `<img src=${accordionOneImg} alt="" />`;
const accordionTwoTemp = `<img src=${accordionTwoImg} alt="" />`;
const firstAccordionWrap = document.querySelector('.accordion-img');
const secondAccordionWrap = document.querySelector('.accordion2-img');

const loadAboutImgs = () => {
	if (
		aboutHeroImgWrap ||
		aboutPositionedImgWrap ||
		medicalTeamImgWrap ||
		introBgWrap ||
		missionImgWrap ||
		compassWrap ||
		excellWrap ||
		collabWrap ||
		sustainWrap ||
		accessWrap ||
		teamOneWrap ||
		teamTwoWrap ||
		firstAccordionWrap ||
		secondAccordionWrap
	) {
		aboutHeroImgWrap.innerHTML += aboutHeroImgTemp;
		aboutPositionedImgWrap.innerHTML += aboutPostionedImgTemp;
		medicalTeamImgWrap.innerHTML += medicalImgTemp;
		introBgWrap.innerHTML += introBgTemp;
		missionImgWrap.innerHTML += missionImgTemp;

		compassWrap.innerHTML += compassionTemp;
		excellWrap.innerHTML += excellenceTemp;
		collabWrap.innerHTML += collaborationTemp;
		sustainWrap.innerHTML += sustainabilityTemp;
		accessWrap.innerHTML += accessibilityTemp;

		teamOneWrap.innerHTML += teamOneTemp;
		teamTwoWrap.innerHTML += teamTwoTemp;

		firstAccordionWrap.innerHTML += accordionOneTemp;
		secondAccordionWrap.innerHTML += accordionTwoTemp;
	}
};

export { loadAboutImgs };
