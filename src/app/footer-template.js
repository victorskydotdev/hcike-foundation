import brandLogo from '../assets/footer-logo.png';

import { footerWrap } from './variables';

const footerTemplate = `
  <div class="footer-container">
    <div class="brand-wrap">
      <img src=${brandLogo} alt="Brand-logo" />

      <ul class="social-media-wrap">
        <li>
          <a href="https://www.facebook.com/profile.php?id=61561756637163">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </li>

        <li>
          <a href="https://x.com/hcikefoundation">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </li>
       
        <li>
          <a href="https://www.linkedin.com/company/hcike-foundation/">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </li>
        
        
      </ul>
    </div>

    <div class="footer-sitemaps">
      <div class="footer-nav1">
        <ul class="nav-links">
          <li><a href="/" class="links">Home</a></li>
          <li><a href="/about.html" class="links">About</a></li>
          <li><a href="/contact.html" class="links">Contact</a></li>
          <!-- <li><a href="/" class="links">Blog/News</a></li> -->
        </ul>
      </div>

      <div class="footer-nav2">
        <ul class="nav-links">
          <li><a href="/about.html#our-programs" class="links">Our programs</a></li>
          <li><a href="/" class="links">Volunteer</a></li>
          <li><a href="/donate.html" class="links">Donate</a></li>
        </ul>
      </div>

      <div class="newsltr-signup-wrap">
        <h4 class="heading-title">Subscribe to receive updates from us</h4>

        <form action="" class="newsltr-form">
          <input type="text" name="subscriberemail" placeholder="johndoe@email.com" />
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
