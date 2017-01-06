import _ from 'lodash'
import pluralize from 'pluralize'
import path from 'path'
import fs from 'fs'

const basePath = 'src/store'

export const getStorePath = (...args) =>
  path.join(basePath, ...args)

export const findStorePaths = (cwd) => {
  const storePath = path.join(cwd, getStorePath())
  if (fs.existsSync(storePath)) {
    return fs.readdirSync(storePath)
      .filter((p) => fs.statSync(path.join(storePath, p)).isDirectory())
  }
  return []
}

export const getInfoFromStorePath = (storePath, baseUrl) => ({
  name: storePath,
  url: baseUrl && baseUrl.replace
    ? `${baseUrl.replace(/\/$/, '')}/${basePath}/${storePath}`
    : getStorePath(storePath)
})

export const transformName = (name) => {
  const camel = _.camelCase(name)
  const pascal = _.upperFirst(camel)
  const camelPlural = pluralize(camel)
  const pascalPlural = pluralize(pascal)
  const constant = _.snakeCase(name).toUpperCase()
  return { camelPlural, pascalPlural, camel, pascal, constant }
}

export const replaceNames = (contents, originalNames, names) =>
  contents.replace(new RegExp(originalNames.camelPlural, 'g'), names.camelPlural)
    .replace(new RegExp(originalNames.pascalPlural, 'g'), names.pascalPlural)
    .replace(new RegExp(originalNames.camel, 'g'), names.camel)
    .replace(new RegExp(originalNames.pascal, 'g'), names.pascal)
    .replace(new RegExp(originalNames.constant, 'g'), names.constant)
    .replace(new RegExp(`api.${names.camel}`, 'g'), `api.${originalNames.camel}`)
