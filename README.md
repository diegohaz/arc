<p align="center">
  <img width="206" alt="arclogo2" src="https://cloud.githubusercontent.com/assets/3068563/19498653/f9b73170-9570-11e6-9183-61dce798abab.png"><br><br>
  <a href="http://standardjs.com"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard Style" /></a>
  <a href="https://travis-ci.org/diegohaz/arc"><img src="https://img.shields.io/travis/diegohaz/arc/master.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://codecov.io/gh/diegohaz/arc"><img src="https://img.shields.io/codecov/c/github/diegohaz/arc.svg?style=flat-square" alt="Coverage Status" /></a>
</p>

**ARc** (Atomic React) is a React starter kit based on the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology. It's progressive, which means that you can start with the basic boilerplate and try the other features when you are comfortable.

See the [demo](https://arc.js.org).

## Branches

### [master](https://github.com/diegohaz/arc)

The basic stack with [React](https://facebook.github.io/react/), [Webpack](https://github.com/webpack/webpack), [react-router](https://github.com/ReactTraining/react-router) and [Jest](https://facebook.github.io/jest/).

### [redux](https://github.com/diegohaz/arc/tree/redux)

Master plus [redux](https://github.com/reactjs/redux), [redux-saga](https://github.com/yelouafi/redux-saga) and [redux-form](https://github.com/erikras/redux-form).

### [universal-redux](https://github.com/diegohaz/arc/tree/universal-redux)

Redux plus [Server Side Rendering](https://github.com/reactjs/redux/blob/master/docs/recipes/ServerRendering.md) (*everything works with javascript disabled, even the forms*).

### [fullstack](https://github.com/diegohaz/arc/tree/fullstack)

Universal plus REST API.

### yeoman-generator (soon)

Generate components, redux stores, API endpoints and the entire project through a CLI utility (e.g. `$ yo arc:component`).

## Forks

*Did you fork this repo and made something different? Add it to this section and send a PR.*

## Why

I've been a web developer for the past 14 years, and after dealing with IE vs. Netscape wars, `<table>` layouts and flash websites I can say we live now the best moment in web development. Web components are awesome and React makes it better.

React stimulates you to create very small and pure components. However, as your project grows, you will have an increasing components folder. At some point, this will be really huge and hard to maintain.

I had a React project with more than 100 components in the `components` folder. The first approach I tried to organize it was separating the components by domain (described [here](http://marmelab.com/blog/2015/12/17/react-directory-structure.html)), but I did realize that most of my components didn't belong to any domain, they were shared, so my problems were just moved to the `commons` folder.

The [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) approach comes handy to solve this problem because it considers the reusability through composition, *which is actually what React is*. You will have your minimal/stylish components in one folder, pages in another and so on.

## Download

Just clone the repository and remove the `.git` folder:

```sh
$ git clone https://github.com/diegohaz/arc my-app
$ cd my-app
$ rm -rf .git
$ npm install # or yarn
```

## Usage

- [Run](#run)
- [Deploy](#deploy)
- [Source code](#source-code)
- [Components](#components)

### Run

Once you have installed the dependencies, you can use `npm start` to run a development server.

### Deploy

Use `npm run build` to transpile the code into the `dist` folder. Then, you can deploy it everywhere.

### Source code

The source code should be placed in `src`; public/static files should be placed in `public` so they can be included in the build process.

If you want to start with a clean and minimal source code without the predefined components and tests, just use the `src-clean` instead by renaming it to `src` (and removing or renaming the older one to something like `src-example`).

### Components

This project leverages the Atomic Design methodology to create a scalable and easy to maintain component folder structure. See [why](https://github.com/diegohaz/arc#why).

If you are creating a component and you don't know if it is an atom, a molecule or an organism, don't worry so much. It will be easy to move it later.

You can use the [components](src/components) folder here as an example or refer to the [Pattern Lab Demo](http://demo.patternlab.io/) which this project is based on. Basically, you can think this way:

- An **atom** is a native html tag or a React Component that renders an html tag;
- A **molecule** is a group of atoms;
- An **organism** is a group of atoms, molecules and/or other organisms.

There're cases when, during the development, you do realize that some molecule should be an organism, for example. You just need to move the component folder to the right place and update the respective `index.js` files (`molecules/index.js` and `organisms/index.js`). Everything else should work.

## Contributing

When issuing, use the following patterns in the title for better understanding:
```bash
[v0.3.1-redux] Something wrong is not right # the v0.3.1 release of the redux branch
[redux] Something wrong is not right # the actual code of the redux branch
[master] Something right is not wrong # the actual code of the master branch
Something wrong is right # general or not directly related to any branch
```

PRs are very appreciated. For bugs/features consider creating an issue before sending a PR. But there're other things you can contribute directly:

- I'm not a native english speaker. If you find any typo or some text that could be written in a better way, please send a PR, even if it is only a punctuation;
- If you forked or created another boilerplate based on this one with another features (using [`css-modules`](https://github.com/css-modules/css-modules) instead of [`styled-components`](https://github.com/styled-components/styled-components), for example), add that to the [Forks section](#forks) with the following pattern:
  - [arc-css-modules](https://github.com/username/arc-css-modules) - A little description

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
