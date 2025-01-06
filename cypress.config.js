const { defineConfig } = require("cypress");
const browserify = require("@cypress/browserify-preprocessor");
const { addCucumberPreprocessorPlugin,} = require("@badeball/cypress-cucumber-preprocessor");
const { preprendTransformerToOptions,} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const mochawesome = require('cypress-mochawesome-reporter/plugin');

 async function setupNodeEvents(on,config)
 {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );
  mochawesome(on);
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
 }


module.exports = defineConfig({
  env: {
    baseUrl: "https://magento.softwaretestingboard.com/",
  },
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents,
    specPattern: ["cypress/e2e/**/*.feature", "cypress/e2e/**/*.cy.{js,ts}"],
    fixturesFolder: "cypress/fixtures",
    video: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: "cypress/screenshots",
  },
});
