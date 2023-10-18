import fs from 'fs-extra';
import path from 'path';
import { Logger } from './utils/Logger';

const srcDir = path.join(__dirname, '../src');
const logger = new Logger('generate-index-file');

export default async function generateIndexFile() {
  try {
    // List all .ts files in the src directory
    const tsFiles = (await fs.readdir(srcDir)).filter(
      file => file.endsWith('.ts') && file !== 'index.ts'
    );

    // Construct export statements for each .ts file
    const exportStatements = tsFiles
      .map(file => `export * from './${path.basename(file, '.ts')}';`)
      .join('\n');

    // Write the export statements to index.ts
    const indexPath = path.join(srcDir, 'index.ts');
    await fs.writeFile(indexPath, exportStatements);

    logger.success(`Generated index.ts with exports for ${tsFiles.length} TypeScript files.`);
  } catch (err: any) {
    logger.error('Failed to generate index.ts:');
    logger.error(err.message);
  }
}
