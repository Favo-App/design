module.exports = {
  root: true,
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  rules: {
    'semi': ['error', 'never'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    // @TODO Handle import/no-extraneous-dependencies properly
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
  }
}