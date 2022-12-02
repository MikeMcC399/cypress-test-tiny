const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: false,
  fixturesFolder: false,
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
  },
});
