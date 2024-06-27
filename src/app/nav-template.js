import brandLogo from '../assets/brand-logo.png';
import { bodyDomElement } from './variables';
import { headerNavWrap } from './variables';

const navTemplate = `
  <div class="header-nav-container">
				<div class="navbar">
					<div class="brand-wrap">
						<a href="/">
							<img src=${brandLogo} alt="brand-logo" />
						</a>
					</div>

					<div class="nav-wrap hide-navbar">
						<ul class="nav-links">
							<li class="list">
								<a href="/" class="link">Home</a>
							</li>

							<li class="list">
								<a href="./about.html" class="link">About</a>
							</li>

							<!-- <li class="list">
								<a href="./blog.html" class="link">Blog/News</a>
							</li> -->
							
							<li class="list">
								<a href="./about.html#our-programs" class="link">Our Programs</a>
							</li>
						</ul>

						<div class="btn-wrap">
							<a href="./donate.html" class="link">Donate</a>
							<a href="./contact.html" class="link contact-btn">Contact</a>
						</div>
					</div>

					<div class="hamburger">
						<!-- <button class="open-btn">
							<i class="fa-solid fa-bars"></i>
						</button> -->

						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="open-btn">
							<path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75Zm0 6.5a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H2.75a.75.75 0 0 1-.75-.75Z" clip-rule="evenodd" />
						</svg>


						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="close-btn">
							<path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
						</svg>

					</div>


				</div>
			</div>
`;

document.addEventListener('DOMContentLoaded', () => {
	if (bodyDomElement) {
		bodyDomElement.style.overflowX = 'hidden';
	}
});

const loadNavTemplate = () => {
	headerNavWrap.innerHTML += navTemplate;

	const openBtn = document.querySelector('.open-btn');
	const closeBtn = document.querySelector('.close-btn');

	const navbar = document.querySelector('.nav-wrap');

	openBtn.addEventListener('click', () => {
		navbar.classList.add('show-navbar');
		bodyDomElement.style.overflowY = 'hidden';

		setTimeout(() => {
			openBtn.style.opacity = '0';
		}, 1000);

		setTimeout(() => {
			closeBtn.style.opacity = '1';
			closeBtn.style.transform = 'translateY(0)';
		}, 1000);
	});

	closeBtn.addEventListener('click', () => {
		navbar.classList.remove('show-navbar');
		bodyDomElement.style.overflowY = 'scroll';

		closeBtn.style.transform = 'translateY(-200%)';

		setTimeout(() => {
			openBtn.style.opacity = '1';
		}, 1000);
	});
};

export { loadNavTemplate };
