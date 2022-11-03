/// <reference types="cypress" />

describe('test - soft with skip', () => {

    const { softAssert, softExpect } = chai;

    it.skip('test1', () => {
        cy.wrap([1, 42, 3]).then( vals => {
            vals.forEach( val => {
                softAssert(val === 42, `${val} should equal 42`);
            });
        });
    });

    it('test2', () => {
        cy.wrap([2, 5, 4]).then( vals => {
            vals.forEach( val => {
                softExpect(val).to.eq(42);
            });
        });
    });
});
