# clean-commit
![](https://img.shields.io/github/issues/gomesdigital/clean-commit?color=yellow)
![](https://img.shields.io/github/languages/code-size/gomesdigital/clean-commit?color=green)
[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://github.com/gomesdigital/clean-commit/LICENSE)

An easy way to enforce [conventional commits](https://medium.com/neudesic-innovation/conventional-commits-a-better-way-78d6785c2e08).

## Getting Started
clean-commit is an npm package, but you can use it on any type of project.

### Installing

If you already have a ```package.json```:
```
npm i clean-commit -D
```

Otherwise:
```
npm init -y
npm i clean-commit -D
```
### Using
clean-commit will automatically detect when you make a commit, and then make sure it follows the conventional commits standard.
If you are unfamiliar with conventional commits, use:
```
npm run commit
```
\- that will produce a menu to help you build a good message.

## Uninstalling
1. Run:
   ```
   ./node_modules/clean-commit/scripts/remove-config.js
   ```
   to remove the aliases and config that was added to your ```package.json``` during installation.

2. Then:
   ```
   npm uninstall clean-commit
   ```
   to remove the package.

## Acknowledgements
clean-commit is a more generic version of [@batch/git-tools](https://github.com/batchnz/git-tools). If you're using Gitlab, you may want to check it out instead.
