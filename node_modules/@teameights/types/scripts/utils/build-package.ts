/* eslint-disable no-await-in-loop, no-restricted-syntax */
import chalk from 'chalk';
import { Logger } from './Logger';
import createPackageConfig from './create-package-config';
import compile from './compile';
import generateIndexFile from '../generate-index-file';

const logger = new Logger('build-package');

export interface BuildOptions {
  analyze: boolean;
  sourcemap: boolean;
  minify: boolean;
  formats: string[];
}

export async function buildPackage() {
  const packageName = '@teameight/types';

  logger.info(`Building package ${chalk.cyan(packageName)}`);

  try {
    const startTime = Date.now();
    await generateIndexFile();

    const config = await createPackageConfig();

    logger.info(`Building to esm format...`);
    await compile(config);

    logger.info(
      `Package ${chalk.cyan(packageName)} was built in ${chalk.green(
        `${((Date.now() - startTime) / 1000).toFixed(2)}s`
      )}`
    );
  } catch (err: any) {
    logger.error(`Failed to compile package: ${chalk.cyan(packageName)}`);
    process.stdout.write(`${err.toString('minimal')}\n`);
    process.exit(1);
  }
}
