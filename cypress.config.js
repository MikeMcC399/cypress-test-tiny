const { defineConfig } = require('cypress')

module.exports = defineConfig({
  defaultBrowser: 'firefox',
  fixturesFolder: false,
  e2e: {
    supportFile: false,
  },
})
