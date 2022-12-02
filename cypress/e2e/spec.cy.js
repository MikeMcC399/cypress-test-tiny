/// <reference types="cypress" />
describe('encoding checks', () => {

  it('plain', () => {
    cy.visit('/plain', { timeout: 10000 })
  })

  it('br', () => {
    cy.visit('/br', { timeout: 10000 })
  })

})
