const { defineConfig } = require('cypress');
const cypressSplit = require('cypress-split');
module.exports = defineConfig({
  e2e: {
    video: true,
    env: {
      commandDelay: false,
    },
    setupNodeEvents(on, config) {
      cypressSplit(on, config);
      return config
    },
    testIsolation: false,
    viewportWidth: 1280, 
    viewportHeight: 720,
  },
  defaultCommandTimeout: 10000,
  requestTimeout: 15000,
  chromeWebSecurity:false,
});
