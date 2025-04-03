const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "nxcto8",
  fixturesFolder: false,
  e2e: {
    supportFile: false,
  },
});
