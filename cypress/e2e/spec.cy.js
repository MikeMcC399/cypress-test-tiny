describe('cy.request redirect', () => {
  it('request POST to v1', () => {
    cy.request('POST', '/api/v1');
  });
});
