import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const config = {
  input: 'src/index.js',
  output: {
    esModule: false,
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true,
    exports: 'auto'
  },
  external: [/^node:/],
  plugins: [
    commonjs({
      ignoreTryCatch: false
    }),
    nodeResolve({ preferBuiltins: true })
  ]
}

export default config
