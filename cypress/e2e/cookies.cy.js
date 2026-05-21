/// <reference types="cypress" />

context('Cookies', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true)

    cy.visit('https://example.cypress.io/commands/cookies')

    // clear cookies again after visiting to remove
    // any 3rd party cookies picked up such as cloudflare
    cy.clearCookies()
  })

  it('cy.getAllCookies() - get all browser cookies', () => {
    // https://on.cypress.io/getallcookies
    cy.getAllCookies().should('be.empty')

    cy.setCookie('key', 'value')
    cy.setCookie('key', 'value', { domain: '.example.com' })

    // cy.getAllCookies() yields an array of cookies
    cy.getAllCookies().should('have.length', 2).should((cookies) => {
      // each cookie has these properties
      // expect(cookies[0]).to.have.property('name', 'key')
      // expect(cookies[0]).to.have.property('value', 'value')
      // expect(cookies[0]).to.have.property('httpOnly', false)
      // expect(cookies[0]).to.have.property('secure', false)
      // expect(cookies[0]).to.have.property('domain')
      // expect(cookies[0]).to.have.property('path')

      // expect(cookies[1]).to.have.property('name', 'key')
      // expect(cookies[1]).to.have.property('value', 'value')
      // expect(cookies[1]).to.have.property('httpOnly', false)
      // expect(cookies[1]).to.have.property('secure', false)
      expect(cookies[1]).to.have.property('domain', '.example.com')
      // expect(cookies[1]).to.have.property('path')
    })
  })
})
