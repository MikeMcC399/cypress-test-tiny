module.exports = {
  'plugins': [
    '@stylistic/js'
  ],
  'extends': [
    'plugin:cypress/recommended'
  ],
  'rules': {
    'cypress/no-unnecessary-waiting': 'off',
    '@stylistic/js/indent': ['error', 2, { 'SwitchCase': 1, 'MemberExpression': 'off' }]
  }
}
