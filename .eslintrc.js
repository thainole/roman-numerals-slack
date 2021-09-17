module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    'no-else-return': 'off',
    'no-multiple-empty-lines': 'off',
    'padded-blocks': 'off',
    'comma-dangle': 'off',
    'linebreak-style': 'off'
  },
};
