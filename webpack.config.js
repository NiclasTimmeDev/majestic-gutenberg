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
              // Presets or predefined rules.
              presets: [
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
      '@wordpress/i18n': ['wp', '__'],
      '@wordpress/editor': ['wp', 'editor'],
      '@wordpress/components': ['wp', 'components'],
    },
  };

  return config;
};
