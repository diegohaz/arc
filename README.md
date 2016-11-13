<p align="center">
  <img width="206" alt="arclogo2" src="https://cloud.githubusercontent.com/assets/3068563/19498653/f9b73170-9570-11e6-9183-61dce798abab.png"><br><br>
  <a href="http://standardjs.com"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard Style" /></a>
  <a href="https://travis-ci.org/diegohaz/arc"><img src="https://img.shields.io/travis/diegohaz/arc/universal-redux.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://codecov.io/gh/diegohaz/arc/branch/universal-redux"><img src="https://img.shields.io/codecov/c/github/diegohaz/arc/universal-redux.svg?style=flat-square" alt="Coverage Status" /></a>
</p>

## Universal Redux

This branch adds [Server Side Rendering](https://github.com/reactjs/redux/blob/master/docs/recipes/ServerRendering.md) to the [redux](https://github.com/diegohaz/arc/tree/redux) branch.

See the [demo](https://arc.diegohaz.com). (*Disable javascript to see the magic*)

## Download

Just clone the repository and remove the `.git` folder:

```sh
$ git clone -b universal-redux https://github.com/diegohaz/arc my-app
$ cd my-app
$ rm -rf .git
$ npm install # or yarn
```

## Usage

- [Run](#run)
- [Deploy](#deploy)
- [Source code](#source-code)
- [Components](#components)
- [Containers](#containers)
- [Store](#store)
- [Universal](#universal)

### Run

Once you have installed the dependencies, you can use `npm run dev` to run a development server.

### Deploy

Use `npm run build` to transpile the code into the `dist` folder. Then, you can deploy it everywhere.

Example on [Heroku](https://heroku.com/) using [Heroku CLI](https://devcenter.heroku.com/articles/heroku-command-line):

```sh
# start a new local git repository
git init

# create a new heroku app
heroku apps:create my-new-app

# add heroku remote reference to the local repository
heroku git:remote --app my-new-app

# commit and push the files
git add -A
git commit -m "Initial commit"
git push heroku master

# open the deployed app in the browser
heroku open
```

The second time you deploy, you just need to:

```sh
git add -A
git commit -m "Update code"
git push heroku master
```

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

### Containers

This project uses a very straight approach of Redux: all components should be as [pure](https://medium.com/@housecor/react-stateless-functional-components-nine-wins-you-might-have-overlooked-997b0d933dbc#.ly1b33jnz) as possible and should be placed in the `components` folder.

If, for some reason, you need to connect a component to the store, just create a container with the same name, import the pure component and connect it. Thus having a nice separation of concerns. **Do not add any extra styles or another presentational logic on containers**.

You can refer to [this thread](https://twitter.com/dan_abramov/status/668585589609005056) on Twitter:
<p align="center"><img alt="Dan Abramov Tweet" src="https://cloud.githubusercontent.com/assets/3068563/19958100/77ca1b68-a183-11e6-887e-a491dc783f43.png"></p>

Example:

**src/components/organisms/PostList**
```js
// just presentational logic
import React, { PropTypes } from 'react'
import styled from 'styled-components'

import { Post } from 'components'

const PostList = ({ list, loading, ...props }) => {
  return (
    <div {...props}>
      {loading && <div>Loading</div>}
      {list.map((post, i) => <Post key={i} {...post} />)}
    </div>
  )
}

PostList.propTypes = {
  list: PropTypes.array.isRequired,
  loading: PropTypes.bool
}

export default PostList
```

**src/containers/PostList**
```js
import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { postList, fromPost, fromStatus, POST_LIST } from 'store'

import { PostList } from 'components'

class PostListContainer extends Component {
  componentDidMount () {
    this.props.request()
  }

  render () {
    const { list, loading } = this.props
    return <PostList {...{ list, loading }} />
  }
}

const mapStateToProps = (state) => ({
  list: fromPost.getList(state),
  loading: fromStatus.isLoading(state, POST_LIST)
})

const mapDispatchToProps = (dispatch, { limit }) => ({
  request: () => dispatch(postList.request(limit))
})

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer)
```

**src/components/elsewhere**
```js
import { PostList } from 'containers'

<PostList limit={15} />
```

This approach makes it easier to transform any pure component into a container at any time.

### Store

Here lives all the state management of the app.

- `actions` are the messages dispatched throughout the application to perform state changes. [Learn more](http://redux.js.org/docs/basics/Actions.html);
- `reducer` listens to the actions and translates the state changes to the store. [Learn more](http://redux.js.org/docs/basics/Reducers.html);
- `selectors` are used by the application to get parts of the current state. [Learn more](http://redux.js.org/docs/recipes/ComputingDerivedData.html);
- `sagas` listen to the actions and are responsible for performing side effects, like data fetching, caching etc. [Learn more](https://github.com/yelouafi/redux-saga).

To add a new store, just create a new folder with a reducer and change the `store/index.js` file:
```js
import post from './post/reducer'
import status from './status/reducer'

const reducers = {
  routing,
  form,
  post,
  status
}
```

### Universal
```js
component &&
component[method] &&
promises.push(component[method]({ req, res, params, location, store }))
```

This code is present in `src/server.js` and it will call `Component.method()` for the requested Page container, where `method` is the name of the HTTP method used in the request (`get`, `post` etc.).

```js
import React, { Component } from 'react'
import submit from 'redux-form-submit'
import { postList } from 'store'

import { SamplePage } from 'components'
import { config } from './PostForm'

class SamplePageContainer extends Component {
  // called when POST /sampla-page
  static post ({ req, store }) {
    return Promise.all([
      this.get({ store }),
      store.dispatch(submit(config, req.body))
    ])
  }

  // called when GET /sample-page
  static get ({ store }) {
    return new Promise((resolve, reject) => {
      store.dispatch(postList.request(15, resolve, reject))
    })
  }

  render () {
    return <SamplePage />
  }
}

export default SamplePageContainer
```

In order to make the forms work on the server side, this is combined with [redux-form](https://github.com/erikras/redux-form) and [redux-form-submit](https://github.com/diegohaz/redux-form-submit).

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
