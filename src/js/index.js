import * as product from '../asset/product.json';
import { productFactory } from './product';

const app = document.getElementById('app');

product.data.forEach((el) => {
  const productDOM = productFactory(el);
  app.appendChild(productDOM);
});
