/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */

export default {
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest'
  },
  moduleNameMapper: {
    '\\.(scss|css|sass)': 'identity-obj-proxy'
  },
  // setupFilesAfterEnv: ['<rootDir>/src/tests/setupTests.ts'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.tsx',
    '!src/**/*.spec.{tsx}',
    '!src/**/_app.tsx',
    '!src/**/_document.tsx'
  ]
};
