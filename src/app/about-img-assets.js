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

const loadAboutImgs = () => {
	if (
		aboutHeroImgWrap ||
		aboutPositionedImgWrap ||
		medicalTeamImgWrap ||
		introBgWrap ||
		missionImgWrap
	) {
		aboutHeroImgWrap.innerHTML += aboutHeroImgTemp;
		aboutPositionedImgWrap.innerHTML += aboutPostionedImgTemp;
		medicalTeamImgWrap.innerHTML += medicalImgTemp;
		introBgWrap.innerHTML += introBgTemp;
		missionImgWrap.innerHTML += missionImgTemp;
	}
};

export { loadAboutImgs };
