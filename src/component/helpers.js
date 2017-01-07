import _ from 'lodash'
import glob from 'glob'
import path from 'path'

// this function works, but might be hard to read, please refer to tests and comments
// contributions to improve readability are welcome
export const getNormalizedPascalPath = (pascalPath) => {
  let hasPascal

  const parts = pascalPath.split('/').map((part) => ({
    // given 'foo.bar.baz', then name = 'foo', ext = 'baz'
    name: part.replace(/([^.]+)\..+$/, '$1'),
    ext: path.extname(part)
  }))

  return _.uniqWith(parts, (a, b) => {
    // ensure that Pascal parts are unique so paths like Button/Button.js will fallback to Button/
    return a.name === b.name && /^[A-Z]/.test(a.name)
  }).reverse().reduce((prev, curr, i, array) => {
    // if found a Pascal, add everything that comes after like foo/bar/Button/
    // we are iterating reversely so Button/ would come first
    if (hasPascal) {
      return curr.name + (curr.ext || '/') + prev
    }
    if (/^[A-Z]/.test(curr.name)) {
      // set hasPascal flag
      hasPascal = true
      return curr.name + (curr.ext || '/') + prev
    }
    return prev
  }, '')
}

export const getNameFromPascalPath = (pascalPath) => {
  // foo/bar/Baz.js to Baz
  return pascalPath.split('/').reduce((prev, curr) => {
    if (/^[A-Z]/.test(curr)) {
      return curr.replace(/\/|\.[^.]*$/, '')
    }
    return prev
  }, '')
}

export const isDir = (pascalPath) => /\/$/.test(pascalPath)

export const getFolderFromPascalPath = (pascalPath) => {
  const name = getNameFromPascalPath(pascalPath)
  const extension = path.extname(pascalPath)
  return pascalPath.replace(new RegExp(`/?${name}${extension}/?`), '') || '.'
}

export const getInfoFromPascalPath = (pascalPath, baseUrl) => ({
  name: getNameFromPascalPath(pascalPath),
  isDir: isDir(pascalPath),
  extension: path.extname(pascalPath),
  folder: getFolderFromPascalPath(pascalPath),
  url: baseUrl && baseUrl.replace ? `${baseUrl.replace(/\/$/, '')}/${pascalPath}` : pascalPath,
  path: pascalPath
})

export const findPascalPaths = (cwd, prependPath) => {
  const pattern = '**/[A-Z]{*/*.,*.,.}{js,jsx,ts}'
  const ignore = ['**/node_modules/**']
  return glob.sync(pattern, { cwd, ignore }).reduce((array, currentPath) => {
    const normalizedPath = getNormalizedPascalPath(prependPath && prependPath.replace
      ? `${prependPath.replace(/\/$/, '')}/${currentPath}`
      : currentPath
    )
    if (array.indexOf(normalizedPath) < 0) {
      array.push(normalizedPath)
    }
    return array
  }, [])
}

export const replaceNameInPascalResource = (contents, oldName, newName) =>
  contents.replace(
    new RegExp(`([^a-zA-Z0-9_$])${oldName}([^a-zA-Z0-9_$]|Container)`, 'g'),
    `$1${newName}$2`
  )
