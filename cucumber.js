module.exports = {
  default: {
    paths: ['e2e/**/*.feature'],
    require: [
      'e2e/**/*.steps.js',
      'e2e/support/**/*.js'
    ]
  }
};