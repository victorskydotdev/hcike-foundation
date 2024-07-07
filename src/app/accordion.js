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
			const currentHeight = textAreaWrap.offsetHeight;
			textAreaWrap.style.height = currentHeight + 500 + 'px';
			textAreaWrap.classList.add('expanded-layout');
			expandBtn.style.display = 'none';

			if (collapseBtn) {
				collapseBtn.style.display = 'block';
				collapseBtn.addEventListener('click', () => {
					// alert('Collapse button clicked');
					textAreaWrap.classList.remove('expanded-layout');
					collapseBtn.style.display = 'none';
					expandBtn.style.display = 'block';
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

export { accordionFunct, expandLayout, expandContentBox };
