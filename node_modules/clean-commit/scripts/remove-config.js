#!/usr/bin/env node

/* Reverts any changes that were made to the root project's package.json file
when clean-commit was installed. */

const ROOT_DIR = process.env.PWD;
const omit = require('lodash/omit');
const fs = require('fs');
const { exec } =  require('child_process');

let packageJson;
try {
  // load the project's package.json into an object
  packageJson = require(`${ROOT_DIR}/package.json`);
} catch (error) {
  console.log("Error: package.json not found");
  console.log(error);
  process.exit(1);
}

// remove aliases and config from that object
packageJson = omit(packageJson, 'scripts.commit', 'config.commitizen');

// write the object back to the package.json file
fs.writeFileSync(`${ROOT_DIR}/package.json`, JSON.stringify(packageJson, null, 2));
