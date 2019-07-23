const html = require("html-template-tag");
const layout = require("./layout");

module.exports = (message, error) => layout(html`
  <h1>${message}</h1>
  <h2>${error.status}</h2>
  <pre>${error.stack}</pre>
`);
