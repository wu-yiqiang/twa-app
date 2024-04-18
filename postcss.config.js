// module.exports = {
//   plugins: {
//     'postcss-px-to-viewport': {
//       viewportWidth: 375,
//       unitPrecision: 6,
//       unitToConvert: 'px',
//       viewportUnit: 'vmin',
//       fontViewportUnit: 'vmin',
//       propList: ['*']
//     }
//   }
// }

module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*']
    },
    'postcss-import': require('postcss-import'),
    autoprefixer: require('autoprefixer')
  }
}
