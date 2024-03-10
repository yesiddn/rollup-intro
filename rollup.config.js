import html from '@rollup/plugin-html';
import copy from 'rollup-plugin-copy';
import css from 'rollup-plugin-css-only';
import images from '@rollup/plugin-image';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'es', // 'cjs', 'iife', 'umd'
    sourcemap: true
  },
  plugins: [
    copy({
      targets: [
        {
          src: 'src/assets/**/*', // copy all files from src/assets
          dest: 'dist/assets' // destination folder
        }
      ]
    }),
    css({
      output: 'bundle.css'
    }),
    html(), // no se pasan opciones porque se toman las opciones por defecto
    images() // no se pasan opciones porque se toman las opciones por defecto
  ]
}