module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    BigInt: true,
  },
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  rules: {
    indent: ['error', 2, {
      MemberExpression: 0,
    }],
    'arrow-parens': ['error', 'as-needed'],
    'no-param-reassign': ['error', {
      props: false,
    }],
    'max-len': ['error', { code: 140 }],
    'no-unused-vars': ['error', { argsIgnorePattern: 'next' }],
    'space-before-function-paren': ['error', { anonymous: 'never', named: 'never', asyncArrow: 'always' }],
    'class-methods-use-this': [0],
    'no-else-return': ['error', { allowElseIf: true }],
    'no-extend-native': ['error', { exceptions: ['BigInt'] }],
    'no-bitwise': [0],
    'no-multiple-empty-lines': ['error', { max: 1 }],
  },
};
