module.exports = {

    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif)$': '<rootDir>/config/fileMock.js'
    },
    transformIgnorePatterns: ['../node_modules/'],
    transform: {
        '\\.css$': 'jest-css-modules-transform',
        '^.+\\.(js|jsx)$': 'babel-jest'
    },
    "setupFilesAfterEnv": ["<rootDir>/config/setupTests.js"],
}