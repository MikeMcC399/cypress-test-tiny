import pluginCypress from 'eslint-plugin-cypress/flat'
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  pluginCypress.configs.recommended,
  {
    plugins: {
      '@stylistic/js': stylisticJs,
    },
    rules: {
      '@stylistic/js/indent': ['error', 2, { 'SwitchCase': 1, 'MemberExpression': 'off' }],
      'cypress/no-unnecessary-waiting': 'off'
    }
  }
]
