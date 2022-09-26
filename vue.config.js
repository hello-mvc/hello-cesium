const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const cesiumBuild = './node_modules/cesium/Build/Cesium'
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    externals: {
      cesium: 'Cesium'
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: path.join(cesiumBuild, 'Assets'), to: 'lib/cesium/Assets' },
          { from: path.join(cesiumBuild, 'ThirdParty'), to: 'lib/cesium/ThirdParty' },
          { from: path.join(cesiumBuild, 'Widgets'), to: 'lib/cesium/Widgets' },
          { from: path.join(cesiumBuild, 'Workers'), to: 'lib/cesium/Workers' },
          { from: path.join(cesiumBuild, 'Cesium.js'), to: 'lib/cesium/Cesium.js' }
        ]
      }),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./lib/cesium')
      })
    ]
  }
})
