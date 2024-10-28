'use strict';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const path = require('path');
const fs = require('fs-extra');

const PRE_BUILD_DIR = '.next';
const OUTPUT_DIR = 'build';

(async () => {
  const source = path.join(__dirname, PRE_BUILD_DIR);
  
  const dest = path.join(__dirname, OUTPUT_DIR);
  const publicDir = path.join(dest, 'public');
  const nextStatic = path.join(publicDir, '_next', 'static');

  await fs.remove(dest); // remove all previous content
  await fs.ensureDir(dest);

  const staticDir = path.join(source, 'static');

  // copy standalone app to build directory
  await fs.copy(path.join(source, 'standalone'), dest);

  await fs.ensureDir(publicDir); // create public dir
  await fs.ensureDir(nextStatic); // and _next resource dir

  // copy _next/static into public dir
  await fs.copy(staticDir, nextStatic);

  // copy rest of public elements
  await fs.copy(path.join(__dirname, 'public'), publicDir);

  console.log(`Successfully copied content from '${PRE_BUILD_DIR}' to '${OUTPUT_DIR}'`);
})();
