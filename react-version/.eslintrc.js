module.exports = {
    root: true,
    extends: [
        'airbnb-typescript',
        'prettier',
        'prettier/@typescript-eslint',
        'prettier/react'
    ],
    env: {
        browser: true
    },
    rules: {
        'react/no-array-index-key': 'off',
        'no-useless-escape': 'off'
    }
};
