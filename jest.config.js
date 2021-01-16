/**
 * Module contains jest configuration
 * @module _/jest.config.js
 * @author Igor Ivanov
 */
module.exports = {
    setupFilesAfterEnv: ['<rootDir>src/__utils__/setup.js'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    clearMocks: true,
    coverageDirectory: './dist/coverage',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.svg': '<rootDir>src/__mocks__/svgrMock.jsx',
        '\\.(ttf|eot|woff|woff2|png|jpg|jpeg)$': '<rootDir>src/__mocks__/fileMock.js',
    },
    globals: {
        CONFIG: 'test',
    },
};
