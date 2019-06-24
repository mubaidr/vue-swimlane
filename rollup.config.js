import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import { terser } from 'rollup-plugin-terser'
import vue from 'rollup-plugin-vue'

export default {
  input: 'src/component/index.js',
  plugins: [
    vue({
      css: true,
      compileTemplate: true,
    }),
    babel({
      babelrc: false,
      presets: [
        [
          '@babel/preset-env',
          {
            targets: '> 0.25%, not dead',
          },
        ],
      ],
    }),
    commonjs(),
    terser(),
  ],
  output: [
    {
      file: 'dist/vue-swimlane.esm.min.js',
      format: 'esm',
    },
    {
      file: 'dist/vue-swimlane.umd.min.js',
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
