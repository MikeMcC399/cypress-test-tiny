/// <reference types="cypress" />
import testData from '../fixtures/example.json'

describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
  })
})
