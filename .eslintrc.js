module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    'es2021': true,
  },
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/vue3-recommended',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/html-indent': ['error', 2],
    'vue/max-attributes-per-line': ['error', {
      singleline: {
        max: 3,
      },
      multiline: {
        max: 1,
      },
    }],
    'vue/v-on-event-hyphenation': 'off',
    'vue/require-explicit-emits': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'vue/multi-word-component-names': 'off',
    'no-unused-vars': 1,
    'no-console': 1,
    'no-undef': 0,
    'quotes': [2, 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true,
    }],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': [2, {
      'before': false,
      'after': true,
    }],
    'comma-style': [2, 'last'],
    'indent': [2, 2, {
      'SwitchCase': 1,
    }],
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
  },
};
