module.exports = {
    'env': {
        'browser': true,
        'es6': true,
        'jquery': true
    },
    'extends': 'eslint:all',
    'globals': {
        'CefSharp': 'readonly',
        'VRCX': 'readonly',
        'VRCXStorage': 'readonly',
        'SQLite': 'readonly',
        'LogWatcher': 'readonly',
        'Discord': 'readonly',
        'Noty': 'readonly',
        'Vue': 'readonly',
        'VueLazyload': 'readonly',
        'DataTables': 'readonly',
        'ELEMENT': 'readonly'
    },
    'parserOptions': {
        'ecmaVersion': 9
    },
    'root': true,
    'rules': {
        'array-element-newline': 0,
        'block-scoped-var': 0,
        'camelcase': 0,
        'capitalized-comments': 0,
        'complexity': 0,
        'func-names': 0,
        'function-call-argument-newline': 0,
        'guard-for-in': 0,
        'id-length': 0,
        'indent': 0,
        'linebreak-style': 0,
        'lines-around-comment': 0,
        'max-depth': 0,
        'max-len': 0,
        'max-lines': 0,
        'max-lines-per-function': 0,
        'max-statements': 0,
        'multiline-comment-style': 0,
        'newline-per-chained-call': 0,
        'new-cap': 0,
        'no-bitwise': 0,
        'no-console': 0,
        'no-continue': 0,
        'no-empty': ['error', { 'allowEmptyCatch': true }],
        'no-magic-numbers': 0,
        'no-mixed-operators': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-redeclare': 0,
        'no-tabs': 0,
        'no-ternary': 0,
        'no-undefined': 0,
        'no-underscore-dangle': 0,
        'no-var': 0,
        'no-warning-comments': 0,
        'object-curly-spacing': ['error', 'always'],
        'one-var': 0,
        'padded-blocks': 0,
        'prefer-arrow-callback': 0,
        'prefer-destructuring': 0,
        'prefer-named-capture-group': 0,
        'quotes': ['error', 'single', { 'avoidEscape': true }],
        'quote-props': 0,
        'sort-keys': 0,
        'sort-vars': 0,
        'space-before-function-paren': ['error', { 'named': 'never' }],
        'strict': 0,
        'vars-on-top': 0
    }
};