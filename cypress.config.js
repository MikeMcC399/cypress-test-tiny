const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  video: false,
  fixturesFolder: false,
  e2e: {
    supportFile: false,
  },
});
