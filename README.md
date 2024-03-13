# Repro for Scaffolded example specs fail recommended Cypress linting

## Repro steps

```shell
git clone --branch cypress-linting https://github.com/MikeMcC399/cypress-test-tiny
cd cypress-test-tiny
npm ci
npm run lint
```

## Setup

This branch was prepared with the following steps:

### Cypress installation

```shell
npm install cypress -D
npx cypress open
```
Select E2E Testing
Select Continue
Select "E2E Testing"
Select "Electron"
Select "Start E2E Testing in Electron"
Select "Scaffold example specs"
Select "Okay, I got it"
Close the Cypress Launchpad

### Prepare linting configuration

```shell
npm install cypress eslint eslint-plugin-cypress -D
npx cypress open
```


Follow the documentation in [cypress-io/eslint-plugin-cypress](https://github.com/cypress-io/eslint-plugin-cypress)
Create an `.eslintrc.json` file to the `cypress` directory with the following contents:

```json
{
  "extends": [
    "plugin:cypress/recommended"
  ]
}
```
