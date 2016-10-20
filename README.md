<p align="center">
  <img width="206" alt="arclogo2" src="https://cloud.githubusercontent.com/assets/3068563/19498653/f9b73170-9570-11e6-9183-61dce798abab.png"><br><br>
  <a href="http://standardjs.com"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard Style" /></a>
  <a href="https://travis-ci.org/diegohaz/arc"><img src="https://img.shields.io/travis/diegohaz/arc.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://codecov.io/gh/diegohaz/arc"><img src="https://img.shields.io/codecov/c/github/diegohaz/arc.svg?style=flat-square" alt="Coverage Status" /></a>
</p>

**ARc** (Atomic React) is a React starter kit based on the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology. It's progressive, which means that you can start with the basic boilerplate and try the other features when you are comfortable.

See the [demo](https://arc.js.org).

## Branches

### [master](https://github.com/diegohaz/arc)

The basic stack with [React](https://facebook.github.io/react/), [Webpack](https://github.com/webpack/webpack), [react-router v4](https://github.com/ReactTraining/react-router/tree/v4) and [Jest](https://facebook.github.io/jest/).

### redux (soon)

Master plus [Redux](https://github.com/reactjs/redux).

### universal-redux (soon)

Redux plus [Server Side Rendering](https://github.com/reactjs/redux/blob/master/docs/recipes/ServerRendering.md).

### fullstack (soon)

Universal plus REST API.

### yeoman-generator (soon)

Generate components, redux stores, API endpoints and the entire project through a CLI utility (e.g. `$ yo arc:component`).

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

Once you have installed the dependencies, you can use `npm start` to run a development server or `npm run build` to transpile the code into the `dist` folder.

The source code should be placed in `src`; public/static files should be placed in `public` so they can be included in the build process.

## FAQ

### How do I know if the component I'm creating is an atom, molecule or organism?

You can use the [components](src/components) folder here as an example or refer to the [Pattern Lab Demo](http://demo.patternlab.io/) which this project is based on. Basically, you can think this way:

- An **atom** is a native html tag or a React Component that renders an html tag;
- A **molecule** is a group of atoms;
- An **organism** is a group of atoms, molecules and/or other organisms.

There're cases when, during the development, you do realize that some molecule should be an organism, for example. This boilerplate was designed in a way that makes it easier to move components. You just need to move the component folder to the right place and update the respective `index.js` files (`molecules/index.js` and `organisms/index.js`). Everything else should work.

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
