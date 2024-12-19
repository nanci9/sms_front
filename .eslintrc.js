module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'semi': 'off',                          // 禁用分号规则
    'comma-dangle': 'off',                  // 禁用尾随逗号规则
    'vue/multi-word-component-names': 'off', // 禁用组件名称多单词规则
    'space-before-function-paren': 'off'    // 禁用函数前空格规则
  }
}
