import { sortBoxes } from './shared.js'

const queueSelector = (column, count) => column.slice(column.length - count)

const solvePart2 = (data, parser) => {
  const { commands, startState } = parser(data)

  return commands
    .reduce(sortBoxes(queueSelector), startState)
    .map(column => column[column.length - 1])
    .join('')
}

export { solvePart2 }
