import { sum } from '../utils/shared.js'

function* generateId() {
  let i = 0
  while (true) {
    yield ++i
  }
}

const parseInput = line => {
  if (line.substring(0, 4) === '$ cd') {
    return { command: 'cd', arg: line.substring(5) }
  } else if (line.substring(0, 4) === '$ ls') {
    return { command: 'ls', arg: undefined }
  } else if (line.substring(0, 3) === 'dir') {
    return { command: 'dir', arg: line.substring(4) }
  } else {
    return {
      command: 'file',
      arg: line.split(' ')[1],
      size: +line.split(' ')[0],
    }
  }
}

let cachedResults = new Map()

const getSize = files => file => {
  // is Cached
  if (cachedResults.has(file)) {
    return cachedResults.get(file)
  }

  const currentFile = files.get(file)

  // Is file
  if (!currentFile.children) {
    cachedResults.set(currentFile.id, currentFile.size)
    return currentFile.size
  }

  const fileSize = currentFile.children.map(getSize(files)).reduce(sum, 0)
  cachedResults.set(currentFile.id, fileSize)
  return fileSize
}

const initFileSystem = () => {
  const map = new Map()
  map.set(0, {
    id: 0,
    name: '/',
    parent: null,
    children: [],
  })
  return map
}

const solvePart2 = data => {
  const idGenerator = generateId()

  const fileSystem = data
    .split(/\n/)
    .map(parseInput)
    .reduce(
      ({ currentDir, files }, curr) => {
        if (curr.command === 'cd') {
          if (curr.arg === '..') {
            return { currentDir: files.get(currentDir).parent, files }
          } else if (curr.arg === '/') {
            return { currentDir: 0, files }
          } else {
            const newDir = Array.from(files.values())
              .filter(item => item.parent === currentDir)
              .find(item => item.name === curr.arg).id
            return { currentDir: newDir, files }
          }
        } else if (curr.command === 'dir') {
          const newDir = {
            id: idGenerator.next().value,
            name: curr.arg,
            parent: currentDir,
            children: [],
          }
          const current = files.get(currentDir)
          files.set(newDir.id, newDir)
          files.set(currentDir, {
            ...current,
            children: [...(current?.children || []), newDir.id],
          })
          return { currentDir, files }
        } else if (curr.command === 'file') {
          const newFile = {
            id: idGenerator.next().value,
            name: curr.arg,
            parent: currentDir,
            size: curr.size,
          }
          const current = files.get(currentDir)
          files.set(newFile.id, newFile)
          files.set(currentDir, {
            ...current,
            children: [...(current?.children || []), newFile.id],
          })
          return { currentDir, files }
        } else {
          return { currentDir, files }
        }
      },
      { currentDir: 0, files: initFileSystem() },
    ).files

  const fileSizes = Array.from(fileSystem.values())
    .filter(item => !!item.children)
    .map(item => item.id)
    .map(getSize(fileSystem))
    .sort((a, b) => a - b)

  const rootSize = getSize(fileSystem)(0)

  const target = 30000000 - (70000000 - rootSize)

  return fileSizes.find(item => item >= target)
}

export { solvePart2 }
