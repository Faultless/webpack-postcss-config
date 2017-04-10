module.exports = {
  plugins: [
    require('precss')({ /* ...options */ }),
    require('autoprefixer')({ /* ...options */ }),
    require('postcss-import')({}),
    require('postcss-cssnext')({
        browsers: ['last 2 versions', '> 5%'],
    })
  ]
}