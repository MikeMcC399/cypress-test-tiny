/// <reference types="cypress" />

context('End', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/misc')
  })

  // The following test fails to run
  it('.end() - according to docs site', () => {
    // https://on.cypress.io/end

    // cy.end is useful when you want to end a chain of commands
    // and force Cypress to re-query from the root element
    cy.get('.misc-table').within(() => {
      // ends the current chain and yields null
      cy.contains('User: Cheryl').click()
        .end()
        .contains('User: Charles').click()
    })
  })

  // This test runs, however it fails linting with
  // `cypress/unsafe-to-chain-command`
  it('.end() - with new cy.contains()', () => {
    cy.get('.misc-table').within(() => {
      // ends the current chain and yields null
      cy.contains('User: Cheryl').click()
        .end()
      cy.contains('User: Charles').click()
    })
  })

})
