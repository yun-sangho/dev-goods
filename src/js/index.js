import * as product from '../../asset/product.json';
import { productFactory } from './product';

const app = document.getElementById('app');

product.data.forEach((el) => {
  const productDOM = productFactory(el);
  const section = document.createElement('div');

  section.className = 'section';
  section.appendChild(productDOM);
  app.appendChild(section);
});

// const sections = [...document.querySelectorAll('.section')];

// let options = {
//   rootMargin: '0px',
//   threshold: 0.75,
// };

// const callback = (entries) => {
//   entries.forEach((entry) => {
//     const { target } = entry;

//     if (entry.intersectionRatio >= 0.75) {
//       target.classList.add('is-visible');
//     } else {
//       target.classList.remove('is-visible');
//     }
//   });
// };

// const observer = new IntersectionObserver(callback, options);

// sections.forEach((section) => {
//   const sectionChildren = [...section.querySelector('[data-content]').children];

//   sectionChildren.forEach((el, index) => {
//     el.style.setProperty('--delay', `${index * 150}ms`);
//   });

//   observer.observe(section);
// });
