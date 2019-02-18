---
title: NPM
category: js
---

# Version management
Dependencies tree of project
: `npm list [-g]`
: `npm list --depth=0` - without dependencies
Package version and deps
: `npm list <package name>`
Repository actual info
: `npm view <package name>`
: `npm view <package name> version` - the latest version
: `npm view <package name> versions` - available versions
Install old packages
: `npm install <package>@<ver>`
Package update
: `npm outdated` - list of outdated packages
: `npm update` - update (but not until major versions)
: `npm install -g npm-check-updates && ncu -u` - updated until major versions
Uninstall
: `npm uninstall <package name>`
Production
: `npm install --save-dev` installs packages as devDependencies
: `npm install --production` will install packages without devDependencies
Run utility without actual install
: `npx <command> <arguments>`
: `npx <command>@<version> <arguments>`
: `npx <url>` runs any js
