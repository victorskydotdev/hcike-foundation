import childrenImg from '../assets/happy-children.jpg';

const contactMain = document.querySelector('.contact-img-wrap');

const contactMainTemp = `
  <img src=${childrenImg} alt="" />
`;

const loadContactImgs = () => {
	if (contactMain) {
		contactMain.innerHTML += contactMainTemp;
	}
};

export { loadContactImgs };
