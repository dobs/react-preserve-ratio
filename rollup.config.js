import typescript from '@rollup/plugin-typescript';

export default {
  input: 'index.tsx',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [typescript()],
  external: ['prop-types', 'react'],
};
