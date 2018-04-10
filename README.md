<p align="center">
  <img alt="arclogo" src="https://cloud.githubusercontent.com/assets/3068563/23199029/55e9d55a-f8aa-11e6-91a2-74b82db3813c.png"><br><br>
  <a href="https://travis-ci.org/diegohaz/arc"><img src="https://img.shields.io/travis/diegohaz/arc/master.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://codecov.io/gh/diegohaz/arc"><img src="https://img.shields.io/codecov/c/github/diegohaz/arc.svg?style=flat-square" alt="Coverage Status" /></a>
  <a href="https://gitter.im/diegohaz/arc"><img src="https://img.shields.io/badge/chat-on%20gitter-1dce73.svg?style=flat-square" alt="Gitter chat" /></a>
</p>

**ARc** (Atomic React) is a React starter kit based on the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology. It's progressive, which means that you can start with the basic boilerplate and try the other features when you are comfortable.

- **[Demo](https://arc.js.org)**
- **[Documentation](https://github.com/diegohaz/arc/wiki)**

<br>
<hr>
<p align="center">
If you find this useful, please don't forget to star ⭐️ the repo, as this will help to promote the project.<br>
Follow me on <a href="https://twitter.com/diegohaz">Twitter</a> and <a href="https://github.com/diegohaz">GitHub</a> to keep updated about this project and <a href="https://github.com/diegohaz?tab=repositories">others</a>.
</p>
<hr>
<br>

## Branches

- ### [`master`](https://github.com/diegohaz/arc)

  The basic stack with [React](https://facebook.github.io/react/), [Webpack](https://github.com/webpack/webpack), [react-router](https://github.com/ReactTraining/react-router) and [Jest](https://facebook.github.io/jest/).

  - ### [`redux`](https://github.com/diegohaz/arc/tree/redux) <sup><sub>([compare](https://github.com/diegohaz/arc/compare/master...redux?diff=split#files_bucket))</sub></sup>

    Master plus [redux](https://github.com/reactjs/redux), [redux-saga](https://github.com/yelouafi/redux-saga) and [redux-form](https://github.com/erikras/redux-form).

    - ### [`redux-ssr`](https://github.com/diegohaz/arc/tree/redux-ssr) <sup><sub>([compare](https://github.com/diegohaz/arc/compare/redux...redux-ssr?diff=split#files_bucket))</sub></sup>

      Redux plus [Server Side Rendering](https://github.com/reactjs/redux/blob/master/docs/recipes/ServerRendering.md)

## Why

I've been a web developer for the past 14 years and after dealing with IE vs. Netscape wars, `<table>` layouts and flash websites, I can say that we are now living in the best moment in web development. Web components are awesome and React makes it better.

React encourages you to create very small and pure components. However, as your project grows, you will have an increasingly complex components folder. At some point, this will be really huge and hard to maintain.

I had a React project with more than 100 components in the `components` folder. The first approach I tried to organize it was separating the components by domain (described [here](http://marmelab.com/blog/2015/12/17/react-directory-structure.html)), but I realized that most of my components didn't belong to any domain, but were shared. This meant that my problems just moved to the `commons` folder.

The [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) approach comes handy to solve this problem because it considers the reusability through composition, *which is actually what React is*. You will have your minimal/stylish components in one folder, pages in another and so on.

## Setup

### 1. Get the source code

Just clone one of the ARc [branches](#branches):
```sh
$ git clone -b master https://github.com/diegohaz/arc my-app
$ cd my-app
```

You will probably want to remove ARc git history and start a brand new repository:
```sh
$ rm -rf .git
$ git init
```

### 2. Install dependencies

```sh
$ npm install
```

### 3. Run the app

```sh
$ npm run dev
```

It will start the development server with [HMR](https://webpack.github.io/docs/hot-module-replacement) on top of it.

> [http://localhost:3000](http://localhost:3000) — Development server<br>
> [http://localhost:3001](http://localhost:3001) — Webpack assets server (for `redux-ssr` only)<br>

Now you can open [http://localhost:3000](http://localhost:3000) in browser and start developing.

## Contributing

When submitting an issue, use the following patterns in the title for better understanding:
```bash
[v0.3.1-redux] Something wrong is not right # the v0.3.1 release of the redux branch
[redux] Something wrong is not right # the actual code of the redux branch
Something wrong is right # general, related to master or not directly related to any branch
```

PRs are very appreciated. For bugs/features consider creating an issue before sending a PR.

## License

MIT © [Diego Haz](https://github.com/diegohaz)
