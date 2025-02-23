## Current behavior

The following [API example for `.each()`](https://docs.cypress.io/api/commands/each) as shown on the documentation site under [DOM Elements](https://docs.cypress.io/api/commands/each#DOM-Elements)

```js
cy.get('li')
  .should('have.length', 3)
  .each(($li, index, $lis) => {
    return 'something else'
  })
  .then(($lis) => {
    expect($lis).to.have.length(3) // true
  })
```

fails linting with the error `cypress/unsafe-to-chain-command`.

## Desired behavior

All examples in [API > Other Commands > end > Examples](https://docs.cypress.io/api/commands/end#Examples) showing the use of the Cypress API call `.each` should pass linting using the Cypress linting [recommended configuration](https://github.com/cypress-io/eslint-plugin-cypress#recommended-configuration) as defined by the Cypress-provided [cypress-io/eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress) npm module.

## Test code to reproduce

```shell
git clone --branch cypress-each https://github.com/MikeMcC399/cypress-test-tiny
cd cypress-test-tiny
npm ci
npm run cypress:lint
```

*Note that the example fails when run with `npx cypress run` because the test page https://example.cypress.io/commands/connectors doesn't match the test, however this issue is only about linting, not about getting the test to run successfully.*

## Cypress Version

`14.0.0`

## Node version

`v22.13.1`

## Operating System

Ubuntu `24.04.1` LTS

## Debug Logs

```text
$ npm run cypress:lint

> cypress-test-tiny@1.0.0 cypress:lint
> eslint cypress


/home/mike/github/cypress-io/cypress-test-tiny/cypress/e2e/each.cy.js
  10:5  error  It is unsafe to chain further commands that rely on the subject after this command. It is best to split the chain, chaining again from `cy.` in a next command line  cypress/unsafe-to-chain-command

✖ 1 problem (1 error, 0 warnings)
```

## Other

### eslint Version

`9.18.0`

### eslint-plugin-cypress Version

`4.1.0`

### Related

- Follows on from issue posted in https://discord.com/channels/755913899261296641/1331391642392989716
