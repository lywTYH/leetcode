module.exports = {
  roots: ['./src'],
  verbose: false,
  collectCoverage: false,
  coverageDirectory: './coverage/',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  testEnvironment: 'node',
};
