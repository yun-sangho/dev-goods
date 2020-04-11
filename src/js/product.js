import { createHtmlString, createDOMFromString } from './util';

const productHTML = `
  <div>
    <img src="{src}">{name}</img>
    <div>{description}</div>
  </div>
`;

const createProductString = createHtmlString(productHTML);

export const productFactory = (variables) => {
  return createDOMFromString(createProductString(variables));
};
