import path from 'path'

import { Configuration } from 'webpack'

module.exports = {
  stories: ['../src/**/*.stories.ts'],
  webpackFinal: async (config: Required<Configuration>) => ({
    ...config,
    plugins: [...config.plugins],
    module: {
      ...config.module,
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: [/[/\\\\]node_modules[/\\\\]/],
          use: [
            {
              loader: 'babel-loader',
              options: {
                configFile: path.resolve(
                  __dirname,
                  '../',
                  'babel.config.js'
                ),
                cacheDirectory: true,
                compact: true,
              },
            },
          ],
        },
      ],
    },
    resolve: {
      ...config.resolve,
      extensions: [...config.resolve.extensions!, '.ts'], // FIXME non-null assertion operator
      modules: [
        ...config.resolve.modules!, // FIXME non-null assertion operator
        path.resolve(__dirname, '..', 'src'),
      ],
    },
  }),
};
