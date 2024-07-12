const accordionItems = document.querySelectorAll('.accordion-item');

const textAreaWrap = document.querySelector('.paragraph-wrap');
const expandBtn = document.querySelector('.expand-btn');
const collapseBtn = document.querySelector('.collapse-btn');

const contentBox = document.querySelector('.content-box');
const expandStoryBtn = document.querySelector('.expand-story-btn');
const collapseStoryBtn = document.querySelector('.collapse-story-btn');
const aboutContainer = document.querySelector('.about-intro-container');

const accordionFunct = () => {
	accordionItems.forEach((item) => {
		const header = item.querySelector('.accordion-header-wrap');
		header.addEventListener('click', () => {
			const content = item.querySelector('.accordion-content');
			const isExpanded = item.classList.contains('active');

			accordionItems.forEach((item) => item.classList.remove('active'));

			if (!isExpanded) {
				item.classList.add('active');
			}
		});
	});
};

const expandLayout = () => {
	if (expandBtn) {
		expandBtn.addEventListener('click', () => {
			const targetDiv = document.getElementById('para-wrap');

			console.log(targetDiv.offsetHeight);

			const heightMutationObserver = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					setTimeout(() => {
						if (mutation.target === targetDiv) {
							const newHeight = targetDiv.offsetHeight; // Get updated height
							console.log(`Div height changed to: ${newHeight}px`);

							if (newHeight >= 500) {
								console.log('Target height of 500px reached!');
								// You can add additional logic here for when the height reaches 500px

								collapseBtn.classList.add('top-position');
							}
						}
					}, 1000);
				});
			});

			heightMutationObserver.observe(targetDiv, { attributes: true });

			textAreaWrap.classList.add('expanded-layout');
			expandBtn.style.display = 'none';

			if (collapseBtn) {
				collapseBtn.style.display = 'block';
				collapseBtn.addEventListener('click', () => {
					collapseBtn.classList.remove('top-position');

					textAreaWrap.classList.remove('expanded-layout');

					setTimeout(() => {
						collapseBtn.style.display = 'none';
						expandBtn.style.display = 'block';
					}, 1000);
				});
			} else console.log('Btn not in the DOM');
		});
	}
};

const expandContentBox = () => {
	if (expandStoryBtn) {
		expandStoryBtn.addEventListener('click', () => {
			contentBox.classList.add('expanded-layout');
			aboutContainer.style.marginBottom = '12em';
			expandStoryBtn.style.display = 'none';
			collapseStoryBtn.style.display = 'block';

			if (collapseStoryBtn) {
				collapseStoryBtn.addEventListener('click', () => {
					contentBox.classList.remove('expanded-layout');
					collapseStoryBtn.style.display = 'none';
					expandStoryBtn.style.display = 'block';
					aboutContainer.style.marginBottom = '0';
				});
			}
		});
	}
};

const readMoreModal = document.querySelector('.read-more-modal');

const readMoreTemplate = `
	<button class="lm-close-btn">Close</button>

	<div class="container">
		<h3 class="heading">HCIKE Legacy</h3>

		<p class="text">
			Chief Hyacinth Chukwunenye Ike, fondly known as HC Ike, was born on
			April 9, 1936, into the family of Late Pa Joseph Elizabeth Ikeh of
			Umuchoke, Umuokiri Umunumo in Ehime Mbano LGA, Nigeria. He was the
			second son in a family of nine children. Hyacinth, a humble and
			intelligent individual, attended St. Charles Primary School in
			Umuchoke, where he completed his primary education, obtaining his
			standard six first school leaving certificate. Although he faced
			constraints that prevented him from furthering his formal education,
			he found his calling in business.
		</p>

		<p class="text">
			Hyacinth began his business journey in Benin, engaging in the rubber produce trade. He extended his entrepreneurial spirit by selecting and empowering young boys from his hometown to join him in the rubber business in Benin. His return to Umuokiri was marked by the introduction of a Gramophone Radio, a first in his community, and his engagement in basket weaving, a skill he shared with younger community members.
		</p>

		<p class="text">
			Hyacinth married Maria Anosike from Umuaro Umunumo in Ehime Mbano LGA, and they moved to Port-Harcourt, where he ventured into buying and selling food items such as grains. His wife, Maria, was a supportive partner, enhancing his success in business. During the Nigerian Civil War, Hyacinth supplied food items to Biafran soldiers, showcasing his resilience and adaptability.
		</p>

		<p class="text">
			After the war, he relocated to Owerri and continued his grain business. He registered as a general contractor with the Imo State Government, contributing to significant projects such as Imo Hotels, Arochukwu Federal Housing Estate, Owerri Housing Corporation, Grasshoppers Stadium, Relief Market block of stores, and Katangoro Hotels in Niger State. In addition to his contracting business, he ventured into the motor/tipper business and operated HCI Concrete Industrial Products, known as a block industry, until his death in 2015
		</p>

		<p class="text">
			Chief HC Ike was a philanthropist. His philanthropic efforts were widely felt, providing scholarships to underprivileged individuals, constructing the Oyibo river bridge, installing boreholes for clean water access, and sponsoring youth football competitions. He was a patron and board of trustees member for various organizations and served as one of the directors of the community local bank
		</p>

		<p class="text">
			Hyacinth and Maria Ike were blessed with seven children, including Dr. Phil Ngozi Oshieze Ehirim, the wife of the former Executive Chairman of Owerri Municipal. Chief HC Ike was also the founding father of the Christian Global Church, serving his local church diligently until his passing. The HCIKE Foundation was established to honor his legacy, continuing his selfless work for humanity and support for the less privileged in society
		</p>

		<button class="donate-link" href="#">Donate now</button>
	</div>
`;

const readmoreBtn = document.querySelector('.read-more-btn');

if (readmoreBtn) {
	readmoreBtn.addEventListener('click', () => {
		if (readMoreModal) {
			readMoreModal.innerHTML += readMoreTemplate;
			readMoreModal.style.display = 'flex';

			const closeBtn = document.querySelector('.lm-close-btn');

			if (closeBtn) {
				closeBtn.addEventListener('click', () => {
					// alert('close button clicked');

					readMoreModal.style.display = 'none';
				});
			}
		}
	});
}
// end of readmoremore btn

export { accordionFunct, expandLayout, expandContentBox };
