import * as data from '../../asset/data.json';
import { productFactory } from './components/product';
import images from '../../asset/img/*.png';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.scrollTo(0, 0);

const app = document.getElementById('app');
const products = document.getElementById('product-list');

data.product.forEach((variables) => {
  variables.src = images[variables.name];
  productFactory(variables).render(products);
});
