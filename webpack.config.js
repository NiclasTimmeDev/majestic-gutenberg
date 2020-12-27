var autoprefixer = require('autoprefixer');
var MiniCSSExtractPlugin = require('mini-css-extract-plugin');

module.exports = (env, argv) => {
  /**
   * Check if we are in development mode.
   *
   * @return {boolean}
   *   True if in dev mode.
   */
  function isDevelopment() {
    return argv.mode === 'development';
  }

  // The webpack config object.
  var config = {
    entry: {
      // Editor script.
      editor: '/src/editor.js',
      // Script, that will only be applied on the frontend.
      script: '/src/script.js',
    },
    output: {
      filename: '[name].js',
    },
    // Extract all css files that are imported into JS and create separate css file.
    plugins: [
      new MiniCSSExtractPlugin({
        filename: 'bundle.css',
      }),
    ],
    // Get better source mapping in error messages.
    devtool: 'source-map',
    module: {
      // Define rules that are applied when transpiling.
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            // Babel loader to transpile Next gen JS to ES5.
            loader: 'babel-loader',
            options: {
              // Plugins that add additional compiling info.
              plugins: [
                // Use arrow functions in class files.
                '@babel/plugin-proposal-class-properties',
              ],
              // Presets or predefined rules.
              presets: [
                // Babel standard compiling.
                '@babel/preset-env',
                [
                  '@babel/preset-react',
                  {
                    // The function used for transpiling JSX.
                    pragma: 'wp.element.createElement',
                    // The function for transpiling <Fragment>.
                    pragmaFrag: 'wp.element.Fragment',
                    // Getting better React error messages in development mode.
                    development: isDevelopment(),
                  },
                ],
              ],
            },
          },
        },
        // Autoprefix and load all stylesheets.
        {
          test: /\.(sa|sc|c)ss$/,
          use: [
            MiniCSSExtractPlugin.loader,
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer()],
                },
              },
            },
            'sass-loader',
          ],
        },
      ],
    },
    /**
     * Don't include these packages in our final bundle, even if they
     * are imported in some files. The reason is, that in plugin.php, we've declared
     * these packages as a dependency anyway, so including it in editor.s or script.js
     * would increase their sizes unnecessarily. However, if we use the import statement,
     * we receive autocomplete suggestions and all the good stuff, which is highly desireable.
     * Using the 'externals' gives us the best of both worlds.
     */
    externals: {
      '@wordpress/blocks': ['wp', 'blocks'],
      '@wordpress/i18n': ['wp', 'i18n'],
      '@wordpress/editor': ['wp', 'editor'],
      '@wordpress/block-editor': ['wp', 'block-editor'],
      '@wordpress/components': ['wp', 'components'],
      '@wordpress/element': ['wp', 'element'],
    },
  };

  return config;
};
