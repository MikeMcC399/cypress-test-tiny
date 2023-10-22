# cypress-test-tiny

Repo for Cypress issue
https://github.com/cypress-io/cypress/issues/28058
"API call changes method on 308 redirect"

## Purpose

This branch demonstrates the non-compliance of [@cypress/request](https://github.com/cypress-io/request) in `cypress@13.3.2` to [RFC 9110 - HTTP Semantics](https://www.rfc-editor.org/rfc/rfc9110) section [15.4.9 HTTP 308 (Permanent Redirect)](https://www.rfc-editor.org/rfc/rfc9110#name-308-permanent-redirect).

## Reference

[RFC 9110 - 15.4 Redirection 3xx](https://www.rfc-editor.org/rfc/rfc9110#name-redirection-3xx) states:

> [307 (Temporary Redirect)](https://www.rfc-editor.org/rfc/rfc9110#status.307) and [308 (Permanent Redirect)](https://www.rfc-editor.org/rfc/rfc9110#status.308) [RFC7538](https://www.rfc-editor.org/rfc/rfc9110#RFC7538) were later added to unambiguously indicate method-preserving redirects, and status codes [301](https://www.rfc-editor.org/rfc/rfc9110#status.301) and [302](https://www.rfc-editor.org/rfc/rfc9110#status.302) have been adjusted to allow a POST request to be redirected as GET.

## Current behavior

Calling [@cypress/request](https://github.com/cypress-io/request) with POST method to a URL that returns an HTTP 308 (Permanent Redirect) status code, causes a GET request to be sent to the redirected URL.

## Desired behavior

If a URL responds with HTTP 308 (Permanent Redirect) status code to a [@cypress/request](https://github.com/cypress-io/request) where the POST method has been used, then a method-preserving POST request should be sent to the redirected URL. No GET request should be sent.

## Test code to reproduce

Execute

```bash
git clone --branch RFC-9110 https://github.com/MikeMcC399/cypress-test-tiny
cd cypress-test-tiny
npm ci
npm test
```

### Cypress test spec

```js
describe('cy.request redirect', () => {
  it('request POST to v1', () => {
    cy.request('POST', 'http://localhost:3000/api/v1');
  });
});
```

### serve configuration

```json
{
  "redirects": [
    {
      "source": "/api/v1",
      "destination": "/api/v2",
      "type": 308
    }
  ]
}
```

## Cypress version

`13.3.2`

## Node version

`v20.8.1`

## Operating System

`Ubuntu 22.04.3 LTS`

## Logs

```text
  cy.request redirect
 HTTP  10/22/2023 10:48:13 AM 127.0.0.1 POST /api/v1
 HTTP  10/22/2023 10:48:13 AM 127.0.0.1 Returned 308 in 1 ms
 HTTP  10/22/2023 10:48:13 AM 127.0.0.1 GET /api/v2
 HTTP  10/22/2023 10:48:13 AM 127.0.0.1 Returned 200 in 1 ms
    ✓ request POST to v1 (123ms)
```

[rfc-9110.log](https://github.com/MikeMcC399/cypress-test-tiny/blob/RFC-9110/rfc-9110.log)
