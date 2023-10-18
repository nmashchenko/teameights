import path from 'path';
import fs from 'fs-extra';

async function writeVersionToPackageJson(filePath: string, version: string) {
  const current = await fs.readJSON(filePath);
  current.version = version;

  if (current.peerDependencies) {
    Object.keys(current.peerDependencies).forEach(packageName => {
      if (packageName.includes('@nicebets/')) {
        current.peerDependencies[packageName] = version;
      }
    });
  }

  if (current.dependencies) {
    Object.keys(current.dependencies).forEach(packageName => {
      if (packageName.includes('@nicebets/')) {
        current.dependencies[packageName] = version;
      }
    });
  }

  await fs.writeJSON(filePath, current, { spaces: 2 });
}

export async function setPackagesVersion(version: string) {
  await writeVersionToPackageJson(path.join(__dirname, '../../package.json'), version);
}
