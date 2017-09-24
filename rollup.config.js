import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';
import sizes from 'rollup-plugin-sizes';

export default {
  entry: 'src/index.js',
  dest: 'build/js/main.min.js',
  format: 'iife',
  sourceMap: 'inline',
   plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
        presets: [ 'es2015-rollup' ],
        exclude: 'node_modules/**',
        plugins: [
          "transform-object-rest-spread",
          "syntax-object-rest-spread"
        ]
    }),
    uglify(),
    sizes()
  ]
};