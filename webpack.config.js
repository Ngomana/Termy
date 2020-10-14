const Copy = require('copy-webpack-plugin')
const path = require('path')
const ElectronReloadPlugin = require('webpack-electron-reload')({
  path: path.join(__dirname, './build/main.js'),
})

// Electron config
module.exports = {
  mode: 'development',
  entry: './electron/main.ts',
  target: 'electron-main',
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: /electron/,
        use: [
          {
            loader: 'ts-loader',
            options: { configFile: 'tsconfig.electron.json' },
          },
        ],
      },
      {
        test: /\.node$/,
        loader: 'node-loader',
      },
    ],
  },
  output: {
    path: __dirname + '/build',
    filename: 'main.js',
  },
  plugins: [
    new Copy({
      patterns: [
        { from: 'electron/preload.js', to: 'preload.js' },
        // { from: 'build/preload.js', to: '../public/preload.js' },
        // { from: 'build/main.js', to: '../public/electron.js' },
      ],
    }),
    ElectronReloadPlugin(),
  ],
  node: {
    __dirname: false, // can't mock dirname because of node-loader
  },
}
