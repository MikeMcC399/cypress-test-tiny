# cypress-test-tiny

Repro for

- https://github.com/cypress-io/cypress/issues/29627
    'failures' in mochawesome-report is not accurate.
- https://github.com/cypress-io/cypress/issues/31429
    Cypress shows negative faliures in mochawesome reports

```shell
git clone --branch 29627-mochawesome https://github.com/MikeMcC399/cypress-test-tiny
cd cypress-test-tiny
npm ci
npm test
```

Then view

`cypress/results/mochawesome*.json`

to see incorrect 0 and -1 failures

To run individual tests use:

```shell
npm test -- -s cypress/e2e/test-one-skip.cy.js
npm test -- -s cypress/e2e/test-two-skips.cy.js
```
