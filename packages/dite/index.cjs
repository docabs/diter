/* eslint-disable no-restricted-globals */

warnCjsUsage()

// type utils
module.exports.defineConfig = (config) => config

// proxy cjs utils (sync functions)
Object.assign(module.exports, require('./dist/node-cjs/publicUtils.cjs'))

// async functions, can be redirect from ESM build
const asyncFunctions = [
  'build',
  'createServer',
  'preview',
  'transformWithEsbuild',
  'resolveConfig',
  'optimizeDeps',
  'formatPostcssSourceMap',
  'loadConfigFromFile',
  'preprocessCSS',
]
asyncFunctions.forEach((name) => {
  module.exports[name] = (...args) =>
    import('./dist/node/index.js').then((i) => i[name](...args))
})

function warnCjsUsage() {
  if (process.env.VITE_CJS_IGNORE_WARNING) return
  globalThis.__dite_cjs_skip_clear_screen = true
  const yellow = (str) => `\u001b[33m${str}\u001b[39m`
  const log = process.env.VITE_CJS_TRACE ? console.trace : console.warn
  log(
    yellow(
      `The CJS build of Dite's Node API is deprecated. See https://ditejs.dev/guide/troubleshooting.html#dite-cjs-node-api-deprecated for more details.`,
    ),
  )
}
