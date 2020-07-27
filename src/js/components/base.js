export const componentFactory = (template = '') => (vars = {}) => ({
  template,
  vars,
  createHtmlString() {
    return this.template
      .replace(new RegExp('{([^{]+)}', 'g'), (_, varName) => this.vars[varName])
      .trim();
  },
  createDOMFromString(str = '') {
    const placeholder = document.createElement('div');
    placeholder.innerHTML = str;
    return placeholder.firstElementChild;
  },
  render(parent) {
    const htmlString = this.createHtmlString();
    const dom = this.createDOMFromString(htmlString);
    parent.appendChild(dom);
  },
});
