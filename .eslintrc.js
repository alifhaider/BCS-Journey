module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'plugin:react/recommended',
    'plugin:react-native-a11y/ios',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'react',
    'lingui',
    'simple-import-sort',
    'eslint-plugin-react-compiler',
  ],
  rules: {
    // Temporary until https://github.com/facebook/react-native/pull/43756 gets into a release.
    'prettier/prettier': 0,
    'react/no-unescaped-entities': 0,
    'react-native/no-inline-styles': 0,
    'simple-import-sort/exports': 'warn',
    // TODO: Reenable when we figure out why it gets stuck on CI.
    // 'react-compiler/react-compiler': 'error',
  },
  ignorePatterns: [
    '**/__mocks__/*.ts',
    'ios',
    'android',
    'coverage',
    '*.lock',
    '.husky',
    'patches',
    '*.html',
  ],
  settings: {
    componentWrapperFunctions: ['observer'],
  },
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
  },
}
