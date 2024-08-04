'use strict';

/*
 * Copyright (c) 2024 by JWizard
 * Originally developed by Miłosz Gilga <https://miloszgilga.pl>
 */
const path = require('path');
const fs = require('fs-extra');
const readDir = require('recursive-readdir');
const mime = require('mime-types');
const AWS = require("@aws-sdk/client-s3");

const BUCKET_NAME = 's3.jwizard.pl';
const PRE_BUILD_DIR = '.next';
const PUBLIC_DIR = 'public';
const OUTPUT_DIR = 'build';

const s3 = new AWS.S3Client({
  endpoint: process.env.AWS_S3_HOST,
  region: process.env.AWS_S3_REGION,
  credentials: {
    accessKeyId: process.env.AWS_S3_ACCESS_KEY,
    secretAccessKey: process.env.AWS_S3_SECRET_KEY,
  },
  forcePathStyle: true,
  signatureVersion: 'v4',
});

const getDirectoryFilesRecursive = (dir, ignores = []) => {
  return new Promise((resolve, reject) => {
    readDir(dir, ignores, (err, files) => err ? reject(err) : resolve(files));
  });
};

const generateFileKey = (fileName, toReplace, replaced) => {
  const S3objectPath = fileName.split(toReplace)[1];
  return replaced + path.posix.normalize(S3objectPath.replaceAll(/\\/g, '/'));
};

const deletePreviousFiles = async (prefix) => {
  const listData = await s3.send(new AWS.ListObjectsV2Command({
    Bucket: BUCKET_NAME,
    Prefix: prefix,
  }));
  const objectsToDelete = listData?.Contents?.map(({ Key }) => ({ Key }));
  if (objectsToDelete && objectsToDelete.length > 0) {
    await s3.send(new AWS.DeleteObjectsCommand({
      Bucket: BUCKET_NAME,
      Delete: {
        Objects: objectsToDelete,
        Quiet: false,
      },
    }));
  }
  console.log(`Deleted: ${objectsToDelete?.length || 0} objects from ${prefix}.`);
};

const persistFiles = async (sourcePath, toReplace, replaced) => {
  const source = path.join(__dirname, sourcePath);
  const files = await getDirectoryFilesRecursive(source);
  for (const file of files) {
    const fileKey = generateFileKey(file, toReplace, replaced);
    const command = new AWS.PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: fileKey,
      Body: fs.createReadStream(file),
      ContentType: String(mime.lookup(file)),
      ContentEncoding: 'utf-8',
      CacheControl: 'immutable,max-age=31536000,public'
    });
    await s3.send(command);
    console.log(`Persisted: ${fileKey}.`);
  }
};

const moveStandaloneAppToBuildDir = async () => {
  const dest = path.join(__dirname, OUTPUT_DIR);
  await fs.remove(dest);
  await fs.ensureDir(dest);
  await fs.copy(path.join(__dirname, PRE_BUILD_DIR, 'standalone'), dest);
  console.log(`Copied standalone server to ${OUTPUT_DIR} directory.`)
};

(async () => {
  try {
    // delete previous files
    await deletePreviousFiles('front');
    // persist files to S3 bucket
    await persistFiles(path.join(PRE_BUILD_DIR, 'static'), PRE_BUILD_DIR, 'front/_next');
    await persistFiles(PUBLIC_DIR, 'public', 'front');
    // copy standalone app to build directory
    await moveStandaloneAppToBuildDir();
  } catch (e) {
    console.error(e.message);
    process.exit(-1);
  }
})();
