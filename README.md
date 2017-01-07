<p align="center">
  <img width="206" alt="arclogo2" src="https://cloud.githubusercontent.com/assets/3068563/19498653/f9b73170-9570-11e6-9183-61dce798abab.png"><br><br>
  <a href="http://standardjs.com"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard Style" /></a>
  <a href="https://travis-ci.org/diegohaz/arc"><img src="https://img.shields.io/travis/diegohaz/arc/generator-arc.svg?style=flat-square" alt="Build Status" /></a>
  <a href="https://codecov.io/gh/diegohaz/arc/branch/generator-arc"><img src="https://img.shields.io/codecov/c/github/diegohaz/arc/generator-arc.svg?style=flat-square" alt="Coverage Status" /></a>
</p>

## generator-arc

This is the `generator-arc` branch. You can use it to generate components, containers, redux stores and the entire project through a CLI utility.

<p align="center"><img src="https://cloud.githubusercontent.com/assets/3068563/21744321/3e366fd2-d4fa-11e6-8262-c5bba9fc4b26.gif"></p>

## Download

```sh
npm install -g yo generator-arc
```

## Usage

### Generate the project

```sh
yo arc
```

### Generate components

```sh
yo arc:component [--ours] [--theirs] [--containers]
```

- `--ours`: Show only components from the local project;
- `--theirs`: Show only components from ARc repository;
- `--containers`: Show only containers.

### Generate containers

```sh
yo arc:container [--ours]
```

- `--ours`: Show only containers from the local project;

### Generate store

```sh
yo arc:store [--ours] [--theirs]
```

- `--ours`: Show only store from the local project;
- `--theirs`: Show only store from ARc repository;
