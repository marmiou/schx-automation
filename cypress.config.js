const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // reporterOptions: {
  //   charts: true,
  //   reportPageTitle: 'custom-title',
  //   embeddedScreenshots: true,
  //   inlineAssets: true,
  //   saveAllAttempts: false,
  // },
  reporter: 'cypress-mochawesome-reporter',
  video: true,
  reporterOptions: {
    reportDir: 'reports/mochawesome/.jsons/',
    screenshotsFolder: 'reports/mochawesome/screenshots'
  },
  e2e: {
    baseUrl: 'http://qatest.schoox.com',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
