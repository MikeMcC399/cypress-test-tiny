Issue:  https://github.com/cypress-io/github-action/issues/642

Runner externals Node.js version v16.13.0 always used in GHA runs

## Description

When [github-action](https://github.com/cypress-io/github-action) is run, the version of Node.js which the Cypress log shows is being used (v16.13.0) is neither the installed version (18.13.0), nor the default version for the runner (v16.19.0).

Cypress shows: v16.13.0 `(/home/runner/runners/2.300.2/externals/node16/bin/node)`
[Default Node.js in runner ubuntu-22.04 runner](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2204-Readme.md#language-and-runtime): v16.19.0

Installed Node.js: 18.13.0 `Found in cache @ /opt/hostedtoolcache/node/18.13.0/x64`

## Steps to reproduce

Environment:
GitHub runner: [ubuntu-22.04](https://github.com/actions/runner-images/blob/main/images/linux/Ubuntu2204-Readme.md)
Node.js: lts/hydrogen (18.13.0)
Cypress: 12.3.0
github-action: v5.0.5

Run action with following core instructions:

```yaml
    runs-on: ubuntu-22.04
    env:
      NO_COLOR: true
    steps:
      - name: Checkout repository
        uses: actions/checkout@v3
      - name: Setup Node.js 18 environment
        uses: actions/setup-node@v3
        with:
          node-version: 'lts/hydrogen'
      - name: Cypress run
        uses: cypress-io/github-action@v5
        with:
          spec: cypress/e2e/spec.cy.js
```

Note that the log shows

```text
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        12.3.0                                                                         │
  │ Browser:        Electron 106 (headless)                                                        │
  │ Node Version:   v16.13.0 (/home/runner/runners/2.300.2/externals/node16/bin/node)              │
  │ Specs:          1 found (spec.cy.js)                                                           │
  │ Searched:       cypress/e2e/spec.cy.js                                                         │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
```

The log shows Node.js version v16.13.0 being used by Cypress, although v18.13.0 was installed before the `github-action` was called.

Example action to reproduce
- https://github.com/MikeMcC399/cypress-test-tiny/blob/node-test/.github/workflows/cypress-action.yaml

Action log file
- https://github.com/MikeMcC399/cypress-test-tiny/actions/workflows/cypress-action.yaml

## Expectation

The action should use the Node.js version installed by [actions/setup-node@v3](https://github.com/actions/setup-node) - in this case 18.13.0 - and not Node.js v16.13.0.
