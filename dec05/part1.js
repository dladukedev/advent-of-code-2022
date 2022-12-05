import { sortBoxes } from './shared.js'

const stackSelector = (col, count) => col.slice(col.length - count).reverse()

const solvePart1 = (data, parser) => {
  const { commands, startState } = parser(data)

  return commands
    .reduce(sortBoxes(stackSelector), startState)
    .map(column => column[column.length - 1])
    .join('')
}

export { solvePart1 }
