/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const path = require('path');
const fs = require('fs/promises');

const PRE_BUILD_DIR = '.next';
const OUTPUT_DIR = 'build';
const APP_NAME = 'landing-page';
const STATIC_PACKAGES = ['../../i18n-translations'];

const PACKAGE_JSON_CONTENT = {
  type: 'module',
};

const clDir = async dir => {
  await fs.rm(dir, { recursive: true, force: true });
  await fs.mkdir(dir);
};

const cpR = async (src, dest, options = {}) => {
  await fs.cp(src, dest, { recursive: true, ...options });
};

const cpDir = async (src, dest, options = {}) => {
  const dirDest = path.join(dest, path.basename(src));
  await cpR(src, dirDest, options);
};

(async () => {
  const source = path.join(__dirname, PRE_BUILD_DIR);

  const dest = path.join(__dirname, OUTPUT_DIR);
  const projectPublicDir = path.join(__dirname, 'public');
  const outputPublicDir = path.join(dest, 'public');
  const nextStatic = path.join(outputPublicDir, '_next', 'static');

  await clDir(dest);
  console.log('Cleared output directory.');

  const staticDir = path.join(source, 'static');
  const standaloneDir = path.join(source, 'standalone');
  const appDir = path.join(standaloneDir, 'apps', APP_NAME);

  await cpR(appDir, dest);
  console.log('Copy standalone app content into output directory.');

  await cpDir(path.join(standaloneDir, 'node_modules'), dest);
  console.log('Copy node_modules content into output directory.');

  await fs.writeFile(
    path.join(appDir, 'package.json'),
    JSON.stringify(PACKAGE_JSON_CONTENT),
    'utf8'
  );
  console.log('Replace default package.json file content.');

  await clDir(outputPublicDir);
  console.log('Create public and _next/static directories.');

  await cpR(staticDir, nextStatic);
  await cpR(projectPublicDir, outputPublicDir);
  console.log('Copy _next/static and rest of the public assets into public directory.');

  for (const staticPackage of STATIC_PACKAGES) {
    await cpDir(staticPackage, dest, {
      filter: source => path.basename(source) !== 'package.json',
    });
    console.log(`Copy static package: ${staticPackage} content into output directory.`);
  }

  console.log('Ended post build execute statements.');
})();
