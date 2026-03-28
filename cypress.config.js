const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  fixturesFolder: false,
  e2e: {
    baseUrl: 'http://localhost:8080',
    supportFile: false,
  },
});
