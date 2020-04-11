import path from 'path'

import HtmlWebpackPlugin from 'html-webpack-plugin'
import { ConfigurationFactory } from 'webpack'
import { Configuration as DevServerConfiguration } from 'webpack-dev-server'

const config: ConfigurationFactory = (_env, { mode }) => {
  const plugins = [new HtmlWebpackPlugin()]
  const devServer: DevServerConfiguration = {
    contentBase: path.resolve(__dirname, 'public'),
  }
  return {
    entry: {
      main: './src/index.ts',
    },
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: '[name]-[hash].js',
    },
    plugins,
    module: {
      rules: [
        {
          test: /\.ts?$/,
          loader: 'babel-loader',
          include: [path.resolve(__dirname)],
          exclude: [/node_modules/],
          options: {
            cacheDirectory: true,
            envName: mode || 'development',
          },
        },
      ],
    },
    optimization: {
      minimize: true,
      // minimizer: [new TerserPlugin()],
      splitChunks: { name: 'vendor', chunks: 'initial' },
    },
    // eslint-disable-next-line
    // @ts-ignore
    devServer,
    resolve: {
      extensions: ['.ts', '.js'],
      modules: ['./node_modules', path.resolve(__dirname)],
    },
  }
}

// eslint-disable-next-line import/no-default-export
export default config
