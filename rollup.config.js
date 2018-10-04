import buble from 'rollup-plugin-buble'
import vue from 'rollup-plugin-vue'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: 'src/component/index.js',
  plugins: [
    vue({
      css: true,
      compileTemplate: true,
    }),
    buble(),
    resolve({
      only: ['lodash.debounce'],
    }),
    commonjs(),
  ],
  output: [
    {
      file: 'dist/vue-swimlane.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/vue-swimlane.umd.js',
      format: 'umd',
      name: 'VueSwimlane',
    },
    {
      file: 'dist/vue-swimlane.js',
      format: 'iife',
      name: 'VueSwimlane',
    },
    {
      file: 'dist/vue-swimlane.min.js',
      format: 'iife',
      name: 'VueSwimlane',
    },
  ],
}
