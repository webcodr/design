module.exports = {
  moduleFileExtensions: ['js', 'json'],
  transform: {
    '^.+\\.js?$': 'babel-jest'
  },
  testMatch: ['<rootDir>/assets/js/**/*.spec.js'],
  notify: false
}
