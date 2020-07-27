import { componentFactory } from '../base';
import './index.scss';

const productTemplate = `
  <div class="product" data-content>
    <figure class="product-img" style="background-image: url('{src}');">
      <img alt={name} src="{src}"></img>
    </figure>
    <div class="product-description">
      <h2>{description}</h2>
    </div>
  </div>
`;

export const productFactory = componentFactory(productTemplate);
