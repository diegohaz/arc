<center>
<img src="https://cloud.githubusercontent.com/assets/3068563/19393134/ddc11478-9209-11e6-82be-7107cf0ec88e.png" height="100" />

[![JS Standard Style][standard-image]][standard-url]
[![Build Status][travis-image]][travis-url]
[![Coveralls Status][coveralls-image]][coveralls-url]

**ARc** (**A**tomic **R**ea**c**t) can be a progressive boilerplate, as much as a set of components or a project's structure proposal based on [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/). You choose how to use it: from a single component to the whole philosophy.

See the [demo](https://diegohaz.github.io/arc).
</center>

## Branches

- **[master](https://github.com/diegohaz/arc)** - A React/Webpack only application boilerplate.
- **redux** (soon) - Master + Redux.
- **universal-redux** (soon) - Redux + [Server Rendering](https://github.com/reactjs/redux/blob/master/docs/recipes/ServerRendering.md).
- **fullstack** (soon) - Universal + REST API. *The ULTIMATE boilerplate.*
- **yeoman-generator** (soon) - Generate components, redux stores, API endpoints and the entire project through a CLI utility (e.g. `$ yo arc:component`).

## Why

I've been a web developer for the past 14 years, and after dealing with IE vs. Netscape wars, `<table>` layouts and flash websites I can say we live now the best moment in web development. Web components are awesome and React makes it better.

React stimulates you to create very small and pure components. However, as your project grows, you will have an increasing components folder. At some point, this will be really huge and hard to maintain.

The [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) approach comes handy to solve this problem. You will have your minimal/stylish components in one folder, pages in another and so on.

## How to download

You can just download a single component or use the entire code as a boilerplate.

### Download a single component

All the components use [Radium](https://github.com/FormidableLabs/radium) for styling. So make sure you have it installed:

```sh
$ npm install --save radium
```

Then, add or replace the imported files (many of components here use `colors` and `fonts` from the [globals.js](src/components/globals.js) file).

Finally, you can grab the code by accessing the component folder in this repository or by using `svn`:
```sh
$ svn export https://github.com/diegohaz/arc.git/trunk/src/components/atoms/Button path/to/my/components/Button
```

### Download the entire code

Just clone the repository and remove the `.git` folder:

```sh
$ git clone https://github.com/diegohaz/arc my-app
$ cd my-app
$ rm -rf .git
$ npm install # or yarn
```

## How to use

Once you have installed the dependencies, you can use `npm start` to run a development server or `npm run build` to transpile the code into the `dist` folder.

## FAQ

### How do I know if the component I'm creating is an atom, molecule or organism?

You can use the [components](src/components) folder here as an example or refer to the [Pattern Lab Demo](http://demo.patternlab.io/) which this project is based on. Basically, you can think this way:

- An **atom** is a native html tag or a React Component that renders an html tag;
- A **molecule** is a group of atoms;
- An **organism** is a group of atoms, molecules and/or other organisms.

There're cases when, during the development, you do realize that some molecule should be an organism, for example. This boilerplate was designed in a way that makes it easier to move components. You just need to move the component folder to the right place and update the respective `index.js` files (`molecules/index.js` and `organisms/index.js`). Everything else should work.

### How to run the tests?

If you grab the entire boilerplate, just run `npm test`.

Otherwise, you need first to copy the [test/fileMock.js](test/fileMock.js) file and install [Jest](https://github.com/facebook/jest) and put the configuration on [package.json](package.json):
```sh
$ npm install --save-dev jest-cli
```
```json
{
  "jest": {
    "moduleDirectories": [
      "src",
      "node_modules"
    ],
    "moduleNameMapper": {
      "^.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/fileMock.js"
    }
  }
}
```

### Why inline styles?

Even though Atomic Design has nothing to do with styling, inline styles fit very well with this approach. Watch these two videos to learn more:

- [React Inline Styles and the Future of CSS](https://www.youtube.com/watch?v=k3OF4A30jSQ)
- [React: CSS in your JS by Christopher Chedeau](https://vimeo.com/116209150)

## License

MIT © [Diego Haz](http://github.com/diegohaz)

[standard-url]: http://standardjs.com
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square

[travis-url]: https://travis-ci.org/diegohaz/arc
[travis-image]: https://img.shields.io/travis/diegohaz/arc.svg?style=flat-square

[coveralls-url]: https://coveralls.io/r/diegohaz/arc
[coveralls-image]: https://img.shields.io/coveralls/diegohaz/arc.svg?style=flat-square
