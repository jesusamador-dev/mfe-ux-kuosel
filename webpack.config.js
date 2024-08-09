const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { InjectManifest } = require('workbox-webpack-plugin');
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config({ path: './.env.devlocal' });
const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new CleanWebpackPlugin(),
  new ModuleFederationPlugin({
    name: 'host',
    remotes: {
      remote: `remote@${process.env.REMOTE_URL}/remoteEntry.js`,
    },
    shared: {
      react: {
        singleton: true,
        requiredVersion: require('./package.json').dependencies.react,
      },
      'react-dom': {
        singleton: true,
        requiredVersion: require('./package.json').dependencies['react-dom'],
      },
    },
  }),
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
];

if (isProduction) {
  plugins.push(
    new InjectManifest({
      swSrc: './src/service-worker.js', // Ruta al archivo fuente del service worker
      swDest: 'service-worker.js', // Nombre del archivo destino del service worker
    })
  );
}

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.(scss|sass)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets/images',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': path.resolve(__dirname, 'src/'), // Agrega este alias
    },
  },
  plugins: plugins,
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: process.env.PORT,
    historyApiFallback: true,
  },
  mode: isProduction ? 'production' : 'development',
};
