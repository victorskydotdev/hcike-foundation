import brandLogo from '../assets/footer-logo.png';

import { footerWrap } from './variables';

const footerTemplate = `
  <div class="footer-container">
    <div class="brand-wrap">
      <img src=${brandLogo} alt="Brand-logo" />
    </div>

    <div class="footer-sitemaps">
      <div class="footer-nav1">
        <ul class="nav-links">
          <li><a href="/" class="links">Home</a></li>
          <li><a href="/" class="links">About</a></li>
          <li><a href="/" class="links">Contact</a></li>
          <li><a href="/" class="links">Blog/News</a></li>
        </ul>
      </div>

      <div class="footer-nav2">
        <ul class="nav-links">
          <li><a href="/" class="links">Our programs</a></li>
          <li><a href="/" class="links">Volunteer</a></li>
          <li><a href="/" class="links">Donate</a></li>
        </ul>
      </div>

      <div class="newsltr-signup-wrap">
        <h4 class="heading-title">Subscribe to receive updates from us</h4>

        <form action="" class="newsltr-form">
          <input type="text" placeholder="johndoe@email.com" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
`;

const loadFooterTemp = () => {
	footerWrap.innerHTML += footerTemplate;
};

export { loadFooterTemp };
