const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  fixturesFolder: false,
  e2e: {
    supportFile: false,
  },
});
