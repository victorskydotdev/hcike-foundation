import hcikeImg from '../assets/hcike.jpg';
import medicalPractImg from '../assets/medical-practitioner-with-patient.jpeg';

import medOutreachImg from '../assets/medical-outreach.jpg';
import scholarshipImg from '../assets/scholarship-img.png';
import medImg from '../assets/humanitarian.jpeg';

const donateBgWrap = document.querySelector('.donate-bg-wrap');
const psImgCardWrap = document.querySelector('.ps-img-card-wrap');

const outreachImg = document.querySelector('.outreach-container');
const scholarshipImgWrap = document.querySelector('.scholarship-container');
const diffContainer = document.querySelector('.diff-img-container');

const outreachTemp = `
  <img src="${medOutreachImg}" alt="" />
`;
const scholarshipTemp = `
  <img src="${scholarshipImg}" alt="" />
`;
const medTemp = `
  <img src="${medImg}" alt="" />
`;

const donateBgTemp = `
  <img src=${medicalPractImg} alt="" />
`;

const psImgTemp = `
  <img src=${hcikeImg} alt="" />
`;

const loadDonateImgs = () => {
	if (
		donateBgWrap ||
		psImgCardWrap ||
		outreachImg ||
		scholarshipImgWrap ||
		diffContainer
	) {
		donateBgWrap.innerHTML += donateBgTemp;
		psImgCardWrap.innerHTML += psImgTemp;

		outreachImg.innerHTML += outreachTemp;
		scholarshipImgWrap.innerHTML += scholarshipTemp;
		diffContainer.innerHTML += medTemp;
	}
};

export { loadDonateImgs };
