module.exports = {
  verbose: true,
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '_test_/fileMock.js',

  },
  collectCoverageFrom: [
    '**/src/*.{js,jsx}',
    '**/src/**/*.{js,jsx}',
    '!**/node_modules/**',
  ],
};
