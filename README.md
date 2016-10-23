<p align="center">
  <img width="206" alt="arclogo2" src="https://cloud.githubusercontent.com/assets/3068563/19498653/f9b73170-9570-11e6-9183-61dce798abab.png"><br><br>
  <a href="http://standardjs.com"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard Style" /></a>
  <a href="https://travis-ci.org/diegohaz/arc"><img src="https://img.shields.io/travis/diegohaz/arc/redux.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://codecov.io/gh/diegohaz/arc/branch/redux"><img src="https://img.shields.io/codecov/c/github/diegohaz/arc/redux.svg?style=flat-square" alt="Coverage Status" /></a>
</p>

## Redux

This branch adds [redux](https://github.com/reactjs/redux), [redux-saga](https://github.com/yelouafi/redux-saga) and [redux-form](https://github.com/erikras/redux-form) to the [master](https://github.com/diegohaz/arc) branch.

See the [demo](https://arc.js.org).

## Download

Just clone the repository and remove the `.git` folder:

```sh
$ git clone -b redux https://github.com/diegohaz/arc my-app
$ cd my-app
$ rm -rf .git
$ npm install # or yarn
```

## Usage

Once you have installed the dependencies, you can use `npm start` to run a development server or `npm run build` to transpile the code into the `dist` folder.

The source code should be placed in `src`; public/static files should be placed in `public` so they can be included in the build process.

If you want a clean and minimal source code without the predefined components and tests, just use the `src-clean` instead by renaming it to `src` (and removing or renaming the older one to something like `src-example`).

## License

The MIT License (MIT)

Copyright (c) 2016 [Diego Haz](https://github.com/diegohaz)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
