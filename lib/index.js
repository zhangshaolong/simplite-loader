const Simplite = require('simplite');
module.exports = function (content) {
  return `
    const Simplite = require('simplite');
    module.exports = function (data) {return (function(${Simplite.dataKey}){
      ${Simplite.toCodeBlock(content)}
    }).call(Simplite, data);};
  `;
};