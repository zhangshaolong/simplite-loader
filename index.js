module.exports = function (content) {
  return (
`module.exports = function (data) {
  const Simplite = require('simplite');
  const renderer = Function (Simplite.dataKey, Simplite.toCodeBlock(${JSON.stringify(content)}));
  return renderer.call(Simplite, data);
}`)
}