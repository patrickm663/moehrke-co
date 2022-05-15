#!/usr/bin/env node

// Configures the necessary aliases and modules to use clean-commit.

const ROOT_DIR = process.env.INIT_CWD;
const merge = require('lodash/merge');
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

// add aliases and config to that object
merge(packageJson, {
  scripts: {
    commit: "git cz"
  },
  config: {
    commitizen: {
      path: 'cz-conventional-changelog'
    }
  }
})

// write the object back to the package.json file
fs.writeFileSync(`${ROOT_DIR}/package.json`, JSON.stringify(packageJson, null, 2));

try {
  exec(`cd ${ROOT_DIR} && husky install ./node_modules/clean-commit/.husky`);
} catch (error) {
  console.log("Error: husky install failed");
  console.log(error);
  process.exit(1);
}
