/// <reference types="cypress" />

// https://on.cypress.io/each
context('Each', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/commands/connectors')
  })

  it('.each() - The original array is always yielded()', () => {
    cy.get('li')
    .should('have.length', 3)
    .each(($li, index, $lis) => {
      return 'something else'
    })
    .then(($lis) => {
      expect($lis).to.have.length(3) // true
    })
  })

})
