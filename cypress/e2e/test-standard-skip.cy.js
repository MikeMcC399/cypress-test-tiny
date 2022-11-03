/// <reference types="cypress" />

describe('standard test - with skip', () => {

    it.skip('test1', () => {
        cy.wrap([1, 42, 3]).then( vals => {
            vals.forEach( val => {
                assert(val === 42, `${val} should equal 42`);
            });
        });
    });

    it('test2', () => {
        cy.wrap([2, 5, 4]).then( vals => {
            vals.forEach( val => {
                expect(val).to.eq(42);
            });
        });
    });
});
