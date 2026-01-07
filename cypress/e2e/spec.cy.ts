/// <reference types="cypress" />
import exampleData from '../fixtures/example.json' with { type: 'json' }

describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
  })
})
