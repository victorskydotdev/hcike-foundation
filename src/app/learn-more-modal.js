import { bodyDomElement } from './variables';
const modalContainer = document.querySelector('.learn-more-modal');
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

const templateOne = `
  <div class="container">
				<h3 class="heading">Humaniterian Services</h3>

				<p class="text">
					At the HC Ike Foundation, we prioritise grassroots healthcare in rural and suburban areas. We believe health is paramount and strive to ensure basic healthcare access for neglected regions in Nigeria and Africa. Our slogan, “Your health, our concern,” reflects our commitment to this mission.
				</p>

				<p class="text">
					We serve everyone, regardless of identity, beliefs, or background, because your health matters to us. Our team of medical professionals is dedicated to providing care and promoting healthy lifestyles.
				</p>
			</div>

      <button class="modal-close-btn">Close</button>
`;

const templateTwo = `
  <div class="container">
				<h3 class="heading">Health Services</h3>

				<p class="text">
					Our core health focus is but not limited to women living with cervical cancer in the rural regions of Nigeria. Ensuring adequate medical care are provided and also necessary preventive measures are availed to the girl child on how to live a healthy life. Our team of experts whose indebted knowledge in the field are always willing to offer professional advice on the topic. 
				</p>
			</div>

      <button class="modal-close-btn">Close</button>
`;

const templateThree = `
  <div class="container">
				<h3 class="heading">Carvical Cancer</h3>

				<p class="text">
					Cervical cancer is a significant threat to women in rural and suburban areas. The HC Ike Foundation educates women about the disease and provides medical solutions, encouraging them to speak up. We focus on the reproductive health of women, adolescents, and young adults in rural regions.
				</p>

				<p class="text">
					Many adolescents aged 15-19 in South-eastern Nigeria engage in unprotected sex, risking their reproductive health. Despite increased contraceptive access, cultural, religious, and financial barriers hinder usage, leading to unsafe abortions. The HC Ike Foundation addresses these issues with tailored medical and mental support, guiding young adults through healthy growth.
				</p>
			</div>

      <button class="modal-close-btn">Close</button>
`;

const templateFour = `
  <div class="container">
				<h3 class="heading">Prostate Cancer</h3>

				<p class="text">
					Prostate cancer is rapidly increasing in West Africa, particularly in Nigeria. The HC Ike Foundation is equipped with trained professionals to address this serious disease. We provide education on prostate cancer research, PSA level testing, and available treatment options, ensuring men are informed and supported throughout their healthcare journey.
				</p>
			</div>

      <button class="modal-close-btn">Close</button>
`;

const loadModal = () => {
	if (learnMoreBtns) {
		learnMoreBtns.forEach((button) => {
			button.addEventListener('click', () => {
				bodyDomElement.style.overflow = 'hidden';

				if (button.dataset.id === 'button-1') {
					modalContainer.style.display = 'flex';
					modalContainer.innerHTML = templateOne;
				} else if (button.dataset.id === 'button-2') {
					modalContainer.style.display = 'flex';
					modalContainer.innerHTML = templateTwo;
				} else if (button.dataset.id === 'button-3') {
					modalContainer.style.display = 'flex';
					modalContainer.innerHTML = templateThree;
				} else if (button.dataset.id === 'button-4') {
					modalContainer.style.display = 'flex';
					modalContainer.innerHTML = templateFour;
				} else console.log('button not in the DOM');
			});
		});

		const observer = new MutationObserver((entries) => {
			console.log(entries);

			const modalCloseBtn = document.querySelector('.modal-close-btn');

			modalCloseBtn.addEventListener('click', () => {
				modalContainer.style.display = 'none';

				bodyDomElement.style.overflow = 'auto';
			});
		});

		const parentElement = modalContainer;
		if (parentElement) {
			observer.observe(parentElement, { childList: true });
		}
	}
};

export { loadModal };
