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
    'no-undef': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-else-return': 'off',
    'no-multiple-empty-lines': 'off',
    'max-len': 'off',
    'comma-dangle': 'off',
    'padded-blocks': 'off',
    'linebreak-style': 'off',
    'consistent-return': 'off'
  },
};
