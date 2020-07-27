import { createHtmlString, createDOMFromString } from './util';
import images from '../../asset/img/*.png';

const heroHTML = `
  <div class="hero" data-content>
    <img class="hero__img" src="{src}"></img>
    <div class="hero__description">
      <h2>{description}</h2>
    </div>
  </div>
`;

const createheroString = createHtmlString(heroHTML);

export const heroFactory = (variables) => {
  variables.src = images[variables.name];
  return createDOMFromString(createheroString(variables));
};
