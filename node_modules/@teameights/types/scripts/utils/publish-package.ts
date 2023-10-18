import chalk from 'chalk';
import execa from 'execa';
import { Logger } from './Logger';

const logger = new Logger('publish-package');

export async function publishPackage({ name, tag }: { name: string; tag: string }) {
  try {
    await execa('yarn', ['publish', '--tag', tag, '--access', 'public']);
    logger.success(`Package ${chalk.cyan(name)} was published`);
  } catch (error: any) {
    logger.error(`Failed to publish package ${chalk.red(name)}`);
    process.stdout.write(chalk.red`${error.message}\n`);
    process.exit(1);
  }
}
