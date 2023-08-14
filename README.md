# `before` hook runs before every test in `describe` block instead of once

Repo branch for issue https://github.com/cypress-io/cypress/issues/26073

## Repro code

```js
/// <reference types="Cypress" />
describe('template spec', () => {
  before(() => {
    cy.log('Cypress version: ' + Cypress.version);
  });
  it('first URL', () => {
    cy.visit('https://example.cypress.io');
  });
  it('second URL', () => {
    cy.visit('https://mochajs.org/');
  });
});
```

## Steps

```bash
git clone --branch repeated-before https://github.com/MikeMcC399/cypress-test-tiny
cd cypress-test-tiny
npm ci
npx cypress open --e2e --browser electron
```

- select `visit-twice.cy.js` to run
- expand log to see that `BEFORE ALL` is shown also for second URL
