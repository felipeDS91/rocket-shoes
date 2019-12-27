module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
    'react-hooks'
  ],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js' ]}
    ],
    'import/prefer-default-export': 'off',
    'react/state-in-constructor': 0,
    'react/static-property-placement': 0,
    'class-methods-use-this': 'off',
    'no-param-reassign': 'off',
    'linebreak-style': [0, 'error', 'windows'],
    'no-console': ["error", {allow: ["tron"]}],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'

  },
};
