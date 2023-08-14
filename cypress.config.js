const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    fixturesFolder: false,
    supportFile: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
