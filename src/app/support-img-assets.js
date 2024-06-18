import hcikeImg from '../assets/hcike.jpg';
import medicalPractImg from '../assets/medical-practitioner-with-patient.jpeg';

const donateBgWrap = document.querySelector('.donate-bg-wrap');
const psImgCardWrap = document.querySelector('.ps-img-card-wrap');

const donateBgTemp = `
  <img src=${medicalPractImg} alt="" />
`;

const psImgTemp = `
  <img src=${hcikeImg} alt="" />
`;

const loadDonateImgs = () => {
	if (donateBgWrap || psImgCardWrap) {
		donateBgWrap.innerHTML += donateBgTemp;
		psImgCardWrap.innerHTML += psImgTemp;
	}
};

export { loadDonateImgs };
