import typescript from '@rollup/plugin-typescript';
import { Logger } from './Logger';
import { OutputOptions, Plugin, RollupOptions } from 'rollup';

const logger = new Logger('create-package-config');

export default async function createPackageConfig(): Promise<RollupOptions> {
  const plugins: Plugin[] = [
    typescript({
      rootDir: './src',
    }),
  ];
  const output: OutputOptions = {
    dir: 'dist',
    format: 'esm',
  };

  // Creating rollup config
  return {
    input: 'src/index.ts',
    plugins,
    output,
  };
}
