import { bodyDomElement } from './variables';
const modalContainer = document.querySelector('.learn-more-modal');
const learnMoreBtns = document.querySelectorAll('.learn-more-btn');

const templateOne = `
  <div class="container">
				<p class="text">
					We focus on grass root health services especially in the rural and
					suburban areas. HC Ike Foundation believes the human health is the
					most vital part of life and should be given utmost attention.
					Therefore, we ensure the people living in rural and neglected regions
					of Nigeria and Africa enjoy basic health care services. Our everyday
					slogan: “your health, our concern” is imbibed in every member of our
					team.
				</p>

				<p class="text">
					We prioritize the health of the locals, irrespective of your identity,
					beliefs, background, social standard, class or whatever you represent,
					your healthy life matters to us.
				</p>

				<p class="text">
					We have loads of professionals in different medical specialization,
					who are ready to answer. We provide access to care and promote a
					healthy lifestyle.
				</p>
			</div>

      <button class="modal-close-btn">Close</button>
`;

const templateTwo = `
  <div class="container">
				<p class="text">
					Our core health focus is but not limited to women living with cervical cancer in the rural regions of Nigeria. Ensuring adequate medical care are provided and also necessary preventive measures are availed to the girl child on how to live a healthy life. Our team of experts whose indebted knowledge in the field are always willing to offer professional advice on the topic. 
				</p>
			</div>

      <button class="modal-close-btn">Close</button>
`;

const templateThree = `
  <div class="container">
				<p class="text">
					Cervical cancer is fast ravaging our women especially in our rural and suburban. Women with little knowledge of the effect of such disease are left to die in silent. HCIKE Foundation is always available to educate them on the consequences of killing mute. We teach them to speak up and provide medical solutions. 

				</p>

				<p class="text">
					We also focus on the reproductive health of our women, the girl-adolescent and the young adults living in the rural areas. According to the Federal Ministry of Health National HIV/AIDS and Reproductive Health Survey (NHARS). 2013 Abuja. Federal Ministry of Health: 2012. A significant number of the adolescents aged 15-19 living in South Eastern Nigeria are sexual active with above 40 % and are involved in unprotected sexual activities with multiple partners, exposing them to some reproductive health consequences.  

				</p>

        <p class="text">
          While there have been reports of increased access to contraceptives with tertiary institutions, problems of usage still arise from poor acceptance of these services either for cultural, religious or financial 5 reasons. Strict abortion laws as it were exist in Nigeria but despite these abortion laws, quacks still find ways to perform unsafe abortions using outdated techniques and further creating more reproductive health 6 problems for these adolescents. At HC IKE FOUNDATION, we are properly and specifically designed to medically and mentally meet the needs of these young adults in a timely and respective manner. We are prepared to guide them through the path of growth.
        </p>

				
			</div>

      <button class="modal-close-btn">Close</button>
`;

const templateFour = `
  <div class="container">
				<p class="text">
					Prostate cancer is one of the fastest growing diseases in West Africa and Nigeria to be precise. At HC Ike Foundation, we are equipped with well trained professional who are capable of handling this deadly disease. 

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
