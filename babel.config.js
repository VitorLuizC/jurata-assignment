// @ts-check

/* eslint-env node */

/**
 * Babel configuration.
 * @type {import('@babel/core').TransformOptions}
 */
module.exports = {
  presets: ['next/babel'],
  plugins: [['styled-components', { ssr: true }]],
};
