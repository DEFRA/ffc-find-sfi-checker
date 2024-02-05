module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['**/*.js', '!**/*.test.js'],
  coverageDirectory: 'test-output',
  coverageReporters: ['text-summary', 'lcov'],
  coveragePathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/test-output/',
    '<rootDir>/test/',
    '<rootDir>/jest.config.js',
    '<rootDir>/webpack.config.js',
    '<rootDir>/rename.js',
    '<rootDir>/app/frontend/super-header.js',
    '<rootDir>/app/dist'
  ],
  modulePathIgnorePatterns: ['node_modules'],
  reporters: [
    'default',
    [
      'jest-junit',
      {
        suiteName: 'jest tests',
        outputDirectory: 'test-output',
        outputName: 'junit.xml'
      }
    ]
  ],
  testEnvironment: 'node',
  testPathIgnorePatterns: [],
  verbose: true
}
