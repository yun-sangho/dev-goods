import { createHtmlString, createDOMFromString } from './util';
import images from '../../asset/img/*.png';

const productHTML = `
  <div class="product" data-content>
    <img class="product__img" src="{src}"></img>
    <div class="product__description">
      <h2>{description}</h2>
    </div>
  </div>
`;

const createProductString = createHtmlString(productHTML);

export const productFactory = (variables) => {
  variables.src = images[variables.name];
  return createDOMFromString(createProductString(variables));
};
