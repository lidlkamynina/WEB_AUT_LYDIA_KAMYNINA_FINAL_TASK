const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "http://demoqa.com/",
    viewportWidth: 1440,
    viewportHeight: 1200,

  },
});
