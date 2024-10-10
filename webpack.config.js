const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const deps = require('./package.json').dependencies;
const dotenv = require('dotenv');

// Cargar variables de entorno
dotenv.config({ path: './.env.devlocal' });
const isProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new CleanWebpackPlugin(),
  new ModuleFederationPlugin({
    name: 'mfe_ux_kuosel',
    filename: 'remoteEntryUx.js',
    remotes: {
    },
    exposes: {
      // Atoms
      './atoms/KSLButton': './src/components/atoms/KSLButton/KSLButton.tsx',
      './atoms/KSLIcon': './src/components/atoms/KSLIcon/KSLIcon.tsx',
      './atoms/KSLInput': './src/components/atoms/KSLInput/KSLInput.tsx',
      './atoms/KSLModal': './src/components/atoms/KSLModal/KSLModal.tsx',
      './atoms/KSLPasswordInput': './src/components/atoms/KSLPasswordInput/KSLPasswordInput.tsx',
      
      // Molecules
      './molecules/KSLButtonWithIcon': './src/components/molecules/KSLButtonWithIcon/KSLButtonWithIcon.tsx',
      './molecules/KSLCategoryCard': './src/components/molecules/KSLCategoryCard/KSLCategoryCard.tsx',
      './molecules/KSLCircularCategoryCard': './src/components/molecules/KSLCircularCategoryCard/KSLCircularCategoryCard.tsx',
      './molecules/KSLTransactionCard': './src/components/molecules/KSLTransactionCard/KSLTransactionCard.tsx',
    
      // Organisms
      './organisms/KSLBottomNavBar': './src/components/organisms/KSLBottomNavBar/KSLBottomNavBar.tsx',
      './organisms/KSLCategoryCarousel': './src/components/organisms/KSLCategoryCarousel/KSLCategoryCarousel.tsx',
      './organisms/KSLModalCongratulations': './src/components/organisms/KSLModalCongratulations/KSLModalCongratulations.tsx',
      './organisms/KSLTopBar': './src/components/organisms/KSLTopBar/KSLTopBar.tsx',
    
      // Hooks
      './hooks/useModal': './src/hooks/useModal.ts',
    
      // Providers
      './providers/StylesProvider': './src/providers/StylesProvider.tsx',

      // Layouts
      './layouts/HomeLayout': './src/components/layouts/HomeLayout.tsx',
    },    
    shared: {
      ...deps,
      react: {
        singleton: true,
        requiredVersion: deps['react'],
        eager: true
      },
      'react-dom': {
        singleton: true,
        requiredVersion: deps['react-dom'],
        eager: true
      },
      'react-router-dom': {
        singleton: true,
        requiredVersion: deps['react-router-dom'],
        eager: true
      },
    },
  }),
  new HtmlWebpackPlugin({
    template: './public/index.html',
  }),
];

module.exports = {
  output: {
    path: path.resolve(__dirname, 'dist/kuosel/ux/v1/'),
    publicPath: 'http://localhost:3000/kuosel/ux/v1/',
  },
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: 'raw-loader',
      },
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
    port: process.env.PORT,
    historyApiFallback: true,
    allowedHosts: 'all',
    hot: false,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
    },
  },
  mode: isProduction ? 'production' : 'development',
};
