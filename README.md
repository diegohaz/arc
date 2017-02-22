<p align="center">
  <img alt="arclogo" src="https://cloud.githubusercontent.com/assets/3068563/23199029/55e9d55a-f8aa-11e6-91a2-74b82db3813c.png"><br><br>
  <a href="https://github.com/diegohaz/arc/releases/latest"><img src="https://github-release-version.herokuapp.com/github/diegohaz/arc/release.svg?style=flat-square" alt="Latest release" /></a>
  <a href="https://travis-ci.org/diegohaz/arc"><img src="https://img.shields.io/travis/diegohaz/arc/master.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://codecov.io/gh/diegohaz/arc"><img src="https://img.shields.io/codecov/c/github/diegohaz/arc.svg?style=flat-square" alt="Coverage Status" /></a>
  <a href="https://gitter.im/diegohaz/arc"><img src="https://img.shields.io/badge/chat-on%20gitter-1dce73.svg?style=flat-square" alt="Gitter chat" /></a>
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

### [generator-arc](https://github.com/diegohaz/arc/tree/generator-arc)

Generate components, containers, redux stores and the entire project through a CLI utility.

<p align="center"><img src="https://cloud.githubusercontent.com/assets/3068563/21744321/3e366fd2-d4fa-11e6-8262-c5bba9fc4b26.gif"></p>

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
- [Clean source code](#clean-source-code)
- [Components](#components)
  - [Storybook](#storybook)

### Run

Once you have installed the dependencies, you can use `npm start` to run a development server.

### Deploy

Use `npm run build` to transpile the code into the `dist` folder. Then, you can deploy it everywhere.

### Source code

The source code should be placed in `src`; public/static files should be placed in `public` so they can be included in the build process.

Because of [webpack's config](https://github.com/diegohaz/arc/blob/5c752968c52d013f7218b514021eae08f6ddf07c/webpack.config.js#L19-L21), we can import our source modules without relative paths.
```js
import { Button, HomePage } from 'components' // src/components
import App from 'components/App' // src/components/App
import routes from 'routes' // src/routes
```

### Clean source code

If you want to start with a clean and minimal source code without the predefined components and tests, just use the `src-clean` folder instead by renaming it to `src` (and removing or renaming the older one to something like `src-example`).

Also, you might want to remove unnecessary dependencies:
```sh
npm u -S react-modal # used by src/components/molecules/Modal
```

### Components

This project leverages the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology to create a scalable and easy to maintain component folder structure. See [why](https://github.com/diegohaz/arc#why).

However, Atomic Design should be a solution, **not another problem**. If you want to create a component and don't know where to put it (`atoms`, `molecules`, `organisms` etc.), **do not worry, do not think too much, just put it anywhere**. After you realize what it is, just move the component folder to the right place. Everything else should work.

<p align="center"><img src="https://cloud.githubusercontent.com/assets/3068563/21237760/6b941f76-c2e7-11e6-92e3-bbb7c82b3622.gif"></p>

This is possible because all components are dynamically exported on [`src/components/index.js`](src/components/index.js) and imported in a way that Atomic Design structure doesn't matter:

```js
import { Button, Hero, HomePage, PageTemplate } from 'components'
```

To understand better the Atomic Design methodology, you can refer to the [`src/components`](src/components) folder here and the [Pattern Lab Demo](http://demo.patternlab.io/), which this project is based on. Basically, you can think this way:

- An **atom** is a native html tag or a React Component that renders an html tag (e.g [`Input`](src/components/atoms/Input/index.js));
- A **molecule** is a group of atoms (e.g. [`Field`](src/components/molecules/Field/index.js));
- An **organism** is a group of atoms, molecules and/or other organisms (e.g. [`Form`](https://github.com/diegohaz/arc/blob/redux/src/components/organisms/PostForm/index.js));
- A **page** is... a page, where you will put mostly organisms (e.g. [`HomePage`](src/components/pages/HomePage/index.js));
- A **template** is a layout to be used on pages, see [why templates are good practice](https://github.com/diegohaz/arc/issues/20#issuecomment-265934388).

#### Storybook

I highly recommend you to incorporate [react-storybook](https://github.com/storybooks/react-storybook) on your development process. It really improves productivity and developer experience. Actually, most of the time you can just use the storybook instead of the real webapp while creating components.

This already comes with the boilerplate and you can simply use `npm run storybook` to get it running. But, if you don't want that, just run:
```sh
rm -rf .storybook # remove .storybook folder
npm u -S @kadira/storybook # remove storybook dependency
```

## Contributing

When issuing, use the following patterns in the title for better understanding:
```bash
[v0.3.1-redux] Something wrong is not right # the v0.3.1 release of the redux branch
[redux] Something wrong is not right # the actual code of the redux branch
Something wrong is right # general, related to master or not directly related to any branch
```

PRs are very appreciated. For bugs/features consider creating an issue before sending a PR. But there're other things you can contribute directly:

- I'm not a native english speaker. If you find any typo or some text that could be written in a better way, please send a PR, even if it is only a punctuation;
- If you forked or created another boilerplate based on this one with another features (using [`css-modules`](https://github.com/css-modules/css-modules) instead of [`styled-components`](https://github.com/styled-components/styled-components), for example), add that to the [Forks section](#forks) with the following pattern:
  - [arc-css-modules](https://github.com/username/arc-css-modules) - A short description
  
## Built with ARc

*Built something cool with ARc? Send a PR adding it to this list:*

- [replace-this](https://github.com/username/replace-this) - A short description

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- Contributors START
Prabhat_Sharma prabhatsharma https://github.com/prabhatsharma code
Sven_Schmidt 0xsven https://github.com/0xsven bug code
Sebastian ssmolinski9 https://github.com/ssmolinski9 tests
Steven_Haddix steven-haddix https://github.com/steven-haddix code
Ruslan_Kyba kybarg https://github.com/kybarg bug code
Abhishek_Shende osdevisnot https://github.com/osdevisnot code
Contributors END -->
<!-- Contributors table START -->
| [![Prabhat Sharma](https://avatars.githubusercontent.com/prabhatsharma?s=100)<br /><sub>Prabhat Sharma</sub>](https://github.com/prabhatsharma)<br />[💻](https://github.com/diegohaz/arc/commits?author=prabhatsharma) | [![Sven Schmidt](https://avatars.githubusercontent.com/0xsven?s=100)<br /><sub>Sven Schmidt</sub>](https://github.com/0xsven)<br />[🐛](https://github.com/diegohaz/arc/issues?q=author%3A0xsven) [💻](https://github.com/diegohaz/arc/commits?author=0xsven) | [![Sebastian](https://avatars.githubusercontent.com/ssmolinski9?s=100)<br /><sub>Sebastian</sub>](https://github.com/ssmolinski9)<br />[⚠️](https://github.com/diegohaz/arc/commits?author=ssmolinski9) | [![Steven Haddix](https://avatars.githubusercontent.com/steven-haddix?s=100)<br /><sub>Steven Haddix</sub>](https://github.com/steven-haddix)<br />[💻](https://github.com/diegohaz/arc/commits?author=steven-haddix) | [![Ruslan Kyba](https://avatars.githubusercontent.com/kybarg?s=100)<br /><sub>Ruslan Kyba</sub>](https://github.com/kybarg)<br />[🐛](https://github.com/diegohaz/arc/issues?q=author%3Akybarg) [💻](https://github.com/diegohaz/arc/commits?author=kybarg) | [![Abhishek Shende](https://avatars.githubusercontent.com/osdevisnot?s=100)<br /><sub>Abhishek Shende</sub>](https://github.com/osdevisnot)<br />[💻](https://github.com/diegohaz/arc/commits?author=osdevisnot) |
| :---: | :---: | :---: | :---: | :---: | :---: |
<!-- Contributors table END -->

This project follows the [all-contributors](https://github.com/kentcdodds/all-contributors) specification.
Contributions of any kind welcome!

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
