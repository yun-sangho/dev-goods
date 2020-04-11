export const createHtmlString = (template) => (variables) => {
  return template
    .replace(new RegExp('{([^{]+)}', 'g'), (_, varName) => variables[varName])
    .trim();
};

export const createDOMFromString = (str) => {
  const placeholder = document.createElement('div');
  placeholder.innerHTML = str;
  return placeholder.firstElementChild;
};
