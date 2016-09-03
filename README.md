# Typescript 1.8.10 NPM Module Seed

The objective of this project is to demonstrate how a Typescript project can be used to build an NPM module that can be published to the NPM registry so that it can be used from other Typescript projects without the need to install additional typings.

## Pre-requisites

This project needs Typescript, to install Typescript:
```
npm install -g typescript
```

The project also used Gulp:
```
npm install -g gulp
```

TSLint is also required:
```
npm install -g tslint
```

Mocha:
```
npm install -g mocha
```

Typings:
```
npm install -g typings
```

## Cloning the project

After cloning this project and ensuring global dependencies are installed, execute:
```
npm install
typings install
```

This will install all the dev dependencies of the project.

## Building the project from Visual Studio Code

To build the project from Visual Studio Code, Press `Cmd + Shift + B` (or `Control + Shift + B` on Windows). This will build the project and execute the test cases.

## Debugging the project from Visual Studio

To debug the project from Visual Studio Code, set a break point in a Mocha spec file, then Press `Cmd + Shift + D` (or `Control + Shift + D` on Windows). Then select "Run mocha" from the debug menu and start debugging. This will hit your breakpoint and stop.

## Building the project from command line

To build the project:
```
gulp pack
```

The above command will generate a package file that is ready to be consumed by another Typescript project.

## Using the binary in a separate project

   * Go to your home directory (or another directory of your choice) and copy the generated file from `npm pack` to this new directory
```
cd ~
mkdir moduletest
cd moduletest
cp ../tsc-seed/tsc-seed-1.0.0.tgz .
```
   * Now initialize a package.json file
```
$ npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (moduletest) 
version: (1.0.0) 
description: 
entry point: (index.js) 
test command: 
git repository: 
keywords: 
author: 
license: (ISC) 
About to write to /Users/nocturne/moduletest/package.json:

{
  "name": "moduletest",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}


Is this ok? (yes) 
```
   * Initialize the Typescript project file
```
$ tsc --init
```
   * Install the package
```
$ npm install tsc-seed-1.0.0.tgz
```

Now, the module can be used from a new file. Create a file called index.ts in Visual Studio Code:
```
import * as MyModule from "tsc-seed";

const calculator = new MyModule.Arithmetic.Calculator();
console.log(calculator.add(1, 2));
```

  * Compile the file through the command line
```
$ tsc
```
  * Execute the generated .js file
```
$ node index.js
```

The output should be:
```
3
```