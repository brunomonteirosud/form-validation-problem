module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'babel-jest'
    },
    testRegex: 'tests/.*\\.(test|spec)\\.(jsx?|tsx?)$',
    verbose: true,
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '@/(.*)': '<rootDir>/src/$1'
    },
    coverageReporters: ['html'],
    coverageDirectory: 'test-coverage',
    restoreMocks: true,
    clearMocks: true,
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: './test-coverage',
                filename: 'index.html'
            }
        ]
    ],
    collectCoverageFrom: [
        'src/**/*.{ts,tsx}',
        '!src/index.tsx',
        '!src/**/tests'
    ]
};
