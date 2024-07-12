const footerElem = document.querySelector('.footer-temp-wrap');

const submitForm = () => {
	const observer = new MutationObserver((entries) => {
		const newsletterForm = document.querySelector('.newsltr-form');

		if (newsletterForm) {
			newsletterForm.addEventListener('submit', async (event) => {
				event.preventDefault();

				const formData = new FormData(newsletterForm);
				console.log(formData);

				// const response = await fetch(link, {
				// 	method: 'POST',
				// 	headers: {
				// 		'Content-type': 'application/json',
				// 	},

				// 	body: formData,
				// });
			});
		} else {
			console.log('form not in the DOM');
		}
	});

	const parentElement = footerElem;
	const config = {
		childList: true,
		subtree: true,
		attributes: true,
	};
	if (parentElement) {
		observer.observe(parentElement, config);
	}
};

export { submitForm };
