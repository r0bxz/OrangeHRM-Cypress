// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()
require('cypress-xpath');
Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignore specific errors
    if (err.message.includes('e.findElement is not a function')) {
      // returning false here prevents Cypress from failing the test
      return false;
    }
    // returning true allows Cypress to fail the test
    return true;

    // cypress/e2e/spec.cy.js
// https://github.com/bahmutov/cypress-slow-down

// slow down each command by the default amount
// which is 1 second

  });
  



// Alternatively you can use CommonJS syntax:
// require('./commands')