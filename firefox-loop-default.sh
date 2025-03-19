for i in {1..10}
do
  npx cypress run -s cypress/e2e/spec-default.cy.js -b firefox
done
