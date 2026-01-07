// e2e-run-tests.js
const cypress = require('cypress')

cypress
  .run({
    // the path is relative to the current working directory
    spec: './cypress/e2e/spec.cy.ts',
  })
  .then((results) => {
    console.log(results)
  })
  .catch((err) => {
    console.error(err)
  })
