for i in {1..10}
do
  npx cypress run -s cypress/e2e/spec.cy.js -b firefox
done
