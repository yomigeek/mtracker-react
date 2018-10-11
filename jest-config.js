module.exports = {
  verbose: true,
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|gif|ttf|woff|woff2)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '_test_/fileMock.js',

  },
  setupTestFrameworkScriptFile: '<rootDir>/src/_test_/testSetup.js',
  collectCoverageFrom: [
    '**/src/*.{js,jsx}',
    '**/src/**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/src/components/App.jsx',
    '!**/src/store/configureStore.js',
    '!**/src/reducers/index.js',
    '!**/src/index.js',
    '!**/src/_test_/fileMock.js',

  ],
};
