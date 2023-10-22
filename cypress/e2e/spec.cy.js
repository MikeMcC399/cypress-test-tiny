describe('cy.request redirect', () => {
  it('request POST to v1', () => {
    cy.request('POST', 'http://localhost:3000/api/v1');
  });
});
