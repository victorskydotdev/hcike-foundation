import brandLogo from '../assets/brand-logo.png';
import { headerNavWrap } from './variables';

const navTemplate = `
  <div class="header-nav-container">
				<div class="navbar">
					<div class="brand-wrap">
						<a href="/">
							<img src=${brandLogo} alt="brand-logo" />
						</a>
					</div>

					<div class="nav-wrap">
						<ul class="nav-links">
							<li class="list">
								<a href="/" class="link">Home</a>
							</li>

							<li class="list">
								<a href="./about.html" class="link">About</a>
							</li>

							<li class="list">
								<a href="./blog.html" class="link">Blog/News</a>
							</li>
							
							<li class="list">
								<a href="./programs.html" class="link">Programs</a>
							</li>
						</ul>

						<div class="btn-wrap">
							<a href="./donate.html" class="link">Donate</a>
							<a href="./contact.html" class="link contact-btn">Contact</a>
						</div>
					</div>

					<div class="hamburger">
						<i class="fa-solid fa-bars"></i>
					</div>
				</div>
			</div>
`;

const loadNavTemplate = () => {
	headerNavWrap.innerHTML += navTemplate;
};

export { loadNavTemplate };
