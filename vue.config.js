const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackTagsPlugin = require('html-webpack-tags-plugin')
const cesiumBuild = 'node_modules/cesium/Build/Cesium'
const cesiumLib = 'lib/cesium'
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      cesium: 'Cesium'
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: cesiumBuild, to: cesiumLib },
        ]
      }),
      new HtmlWebpackTagsPlugin({
        append: false,
        links: [`${cesiumLib}/Widgets/widgets.css`],
        scripts: [`${cesiumLib}/Cesium.js`]
      }),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify(`./${cesiumLib}`)
      })
    ]
  }
})
