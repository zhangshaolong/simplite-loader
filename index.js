module.exports = function (content) {
  return (
`const Simplite = require('simplite');
const renderer = Function (Simplite.dataKey, Simplite.toCodeBlock(${JSON.stringify(content)}));
module.exports = function (data) {
  return renderer.call(Simplite, data);
}`)
}