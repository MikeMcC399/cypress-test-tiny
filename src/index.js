const cypress = require('cypress')
const os = require('node:os')

cypress.run({
}).then((results) => {
  console.log('osName', results.osName)
  console.log('osVersion', results.osVersion)
})
  .catch((err) => {
    console.error(err)
  })
