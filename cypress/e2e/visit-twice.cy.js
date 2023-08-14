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
