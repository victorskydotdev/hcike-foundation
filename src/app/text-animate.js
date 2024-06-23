const greetingCategories = ['Woman', 'Child', 'Man'];

const textToggleElem = document.querySelector('.auto-toggle-text');

let greetingIndex = 0;

const textAnimationFunct = () => {
	setInterval(() => {
		if (textToggleElem) {
			textToggleElem.textContent = greetingCategories[greetingIndex];
		}
		greetingIndex = (greetingIndex + 1) % greetingCategories.length; // Wrap around to the beginning
	}, 1500);
};

export { textAnimationFunct };
