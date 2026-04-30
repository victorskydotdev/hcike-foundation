const $ = (id) => document.getElementById(id);

import img1 from '../../assets/outreach-gallery/img1.jpeg';
import img2 from '../../assets/outreach-gallery/img2.jpg';
import img3 from '../../assets/outreach-gallery/img3.jpg';
import img4 from '../../assets/outreach-gallery/img4.jpg';
import img5 from '../../assets/outreach-gallery/img5.jpg';
import img6 from '../../assets/outreach-gallery/img6.jpg';
import img7 from '../../assets/outreach-gallery/img7.jpg';
import img8 from '../../assets/outreach-gallery/img8.jpg';
import img9 from '../../assets/outreach-gallery/img9.jpg';
import img10 from '../../assets/outreach-gallery/img10.jpg';

const imgArr = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const showcaseOutreach = () => {
	const htmlContent = imgArr
		.map((img) => {
			return `
        <div class="img-wrap">
          <img class="img" src="${img}" />
        </div>
      `;
		})
		.join('');

	if ($('outreach-visuals')) {
		$('outreach-visuals').innerHTML = htmlContent;
	} else console.log("Can't find that element");
};

export { showcaseOutreach };
