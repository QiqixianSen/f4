<<<<<<< HEAD
const { override, fixBabelImports } = require('customize-cra')

module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd-mobile',
      style: 'css',
    }),
  );
=======
const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
       fixBabelImports('import', {
         libraryName: 'antd-mobile',
         style: 'css',
       }),
     );
>>>>>>> 38318fe164371705b414f664f0ad190993823e7e
