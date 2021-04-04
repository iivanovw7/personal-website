/**
 * Module contains jest configuration.
 * @module _/jest.config.js
 * @author Igor Ivanov
 */
module.exports = {
    clearMocks: true,
    coverageDirectory: './dist/coverage',
    globals: {
        CONFIG: 'test',
    },
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|webm)$': '<rootDir>/test/_helper/mocks/fileTransformer.ts',
    },
    resetModules: true,
    roots: ['<rootDir>/test/'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testMatch: ['<rootDir>/test/**/*.ts?(x)'],
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.svg$': 'jest-svg-transformer',
    },
    verbose: true,
};
