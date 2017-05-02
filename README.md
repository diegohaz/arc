<p align="center">
  <img alt="arclogo" src="https://cloud.githubusercontent.com/assets/3068563/23199029/55e9d55a-f8aa-11e6-91a2-74b82db3813c.png"><br><br>
  <a href="https://github.com/diegohaz/arc/releases/latest"><img src="https://github-release-version.herokuapp.com/github/diegohaz/arc/release.svg?style=flat-square" alt="Latest release" /></a>
  <a href="https://travis-ci.org/diegohaz/arc"><img src="https://img.shields.io/travis/diegohaz/arc/master.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://codecov.io/gh/diegohaz/arc"><img src="https://img.shields.io/codecov/c/github/diegohaz/arc.svg?style=flat-square" alt="Coverage Status" /></a>
  <a href="https://gitter.im/diegohaz/arc"><img src="https://img.shields.io/badge/chat-on%20gitter-1dce73.svg?style=flat-square" alt="Gitter chat" /></a>
</p>

**ARc** (Atomic React) is a React starter kit based on the [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/) methodology. It's progressive, which means that you can start with the basic boilerplate and try the other features when you are comfortable.

- **[Demo](https://arc.js.org)**
- **[Documentation](https://github.com/diegohaz/arc/wiki)**

## Branches

- ### [`master`](https://github.com/diegohaz/arc)

  The basic stack with [React](https://facebook.github.io/react/), [Webpack](https://github.com/webpack/webpack), [react-router](https://github.com/ReactTraining/react-router) and [Jest](https://facebook.github.io/jest/).

  - ### [`redux`](https://github.com/diegohaz/arc/tree/redux)

    Master plus [redux](https://github.com/reactjs/redux), [redux-saga](https://github.com/yelouafi/redux-saga) and [redux-form](https://github.com/erikras/redux-form).

    - ### [`redux-ssr`](https://github.com/diegohaz/arc/tree/redux-ssr)

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
$ git clone -b master https://github.com/diegohaz/arc.git my-app
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

## Contributors

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- Contributors START
Prabhat_Sharma prabhatsharma https://github.com/prabhatsharma code
Sven_Schmidt 0xsven https://github.com/0xsven bug code
Sebastian ssmolinski9 https://github.com/ssmolinski9 tests
Steven_Haddix steven-haddix https://github.com/steven-haddix code
Ruslan_Kyba kybarg https://github.com/kybarg bug code doc
Abhishek_Shende osdevisnot https://github.com/osdevisnot code
Gueorgui_Agapov 7s4r https://github.com/7s4r code
Santino santino https://github.com/santino code
Sebastian_MacDonald Optissimum https://github.com/Optissimum code tests
Ryan_Garant protoEvangelion https://github.com/protoEvangelion code
Dennis_Bochen dennisbochen https://github.com/dennisbochen doc
Contributors END -->
<!-- Contributors table START -->
| [<img src="https://avatars.githubusercontent.com/prabhatsharma?s=100" width="100" alt="Prabhat Sharma" /><br /><sub>Prabhat Sharma</sub>](https://github.com/prabhatsharma)<br />[💻](https://github.com/diegohaz/arc/commits?author=prabhatsharma) | [<img src="https://avatars.githubusercontent.com/0xsven?s=100" width="100" alt="Sven Schmidt" /><br /><sub>Sven Schmidt</sub>](https://github.com/0xsven)<br />[🐛](https://github.com/diegohaz/arc/issues?q=author%3A0xsven) [💻](https://github.com/diegohaz/arc/commits?author=0xsven) | [<img src="https://avatars.githubusercontent.com/ssmolinski9?s=100" width="100" alt="Sebastian" /><br /><sub>Sebastian</sub>](https://github.com/ssmolinski9)<br />[⚠️](https://github.com/diegohaz/arc/commits?author=ssmolinski9) | [<img src="https://avatars.githubusercontent.com/steven-haddix?s=100" width="100" alt="Steven Haddix" /><br /><sub>Steven Haddix</sub>](https://github.com/steven-haddix)<br />[💻](https://github.com/diegohaz/arc/commits?author=steven-haddix) | [<img src="https://avatars.githubusercontent.com/kybarg?s=100" width="100" alt="Ruslan Kyba" /><br /><sub>Ruslan Kyba</sub>](https://github.com/kybarg)<br />[🐛](https://github.com/diegohaz/arc/issues?q=author%3Akybarg) [💻](https://github.com/diegohaz/arc/commits?author=kybarg) [📖](https://github.com/diegohaz/arc/commits?author=kybarg) | [<img src="https://avatars.githubusercontent.com/osdevisnot?s=100" width="100" alt="Abhishek Shende" /><br /><sub>Abhishek Shende</sub>](https://github.com/osdevisnot)<br />[💻](https://github.com/diegohaz/arc/commits?author=osdevisnot) | [<img src="https://avatars.githubusercontent.com/7s4r?s=100" width="100" alt="Gueorgui Agapov" /><br /><sub>Gueorgui Agapov</sub>](https://github.com/7s4r)<br />[💻](https://github.com/diegohaz/arc/commits?author=7s4r) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |

| [<img src="https://avatars.githubusercontent.com/santino?s=100" width="100" alt="Santino" /><br /><sub>Santino</sub>](https://github.com/santino)<br />[💻](https://github.com/diegohaz/arc/commits?author=santino) | [<img src="https://avatars.githubusercontent.com/Optissimum?s=100" width="100" alt="Sebastian MacDonald" /><br /><sub>Sebastian MacDonald</sub>](https://github.com/Optissimum)<br />[💻](https://github.com/diegohaz/arc/commits?author=Optissimum) [⚠️](https://github.com/diegohaz/arc/commits?author=Optissimum) | [<img src="https://avatars.githubusercontent.com/protoEvangelion?s=100" width="100" alt="Ryan Garant" /><br /><sub>Ryan Garant</sub>](https://github.com/protoEvangelion)<br />[💻](https://github.com/diegohaz/arc/commits?author=protoEvangelion) | [<img src="https://avatars.githubusercontent.com/dennisbochen?s=100" width="100" alt="Dennis Bochen" /><br /><sub>Dennis Bochen</sub>](https://github.com/dennisbochen)<br />[📖](https://github.com/diegohaz/arc/commits?author=dennisbochen) |
| :---: | :---: | :---: | :---: |
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
