describe('template spec', () => {
  it('check page title', () => {
    cy.visit('/')
    cy.get('h1').should('contain', 'Test page')
  })
})
