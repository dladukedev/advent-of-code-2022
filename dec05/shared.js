const parsePuzzleStart = data =>
  data
    .split(/\n/)
    .reverse()
    .slice(1)
    .reduce(
      (accum, curr) => {
        const col1 = curr.charAt(1)
        const col2 = curr.charAt(5)
        const col3 = curr.charAt(9)
        const col4 = curr.charAt(13)
        const col5 = curr.charAt(17)
        const col6 = curr.charAt(21)
        const col7 = curr.charAt(25)
        const col8 = curr.charAt(29)
        const col9 = curr.charAt(33)

        return [
          [...accum[0], col1],
          [...accum[1], col2],
          [...accum[2], col3],
          [...accum[3], col4],
          [...accum[4], col5],
          [...accum[5], col6],
          [...accum[6], col7],
          [...accum[7], col8],
          [...accum[8], col9],
        ]
      },
      [[], [], [], [], [], [], [], [], []],
    )
    .map(stack => stack.filter(item => item != ' '))

const parseTestStart = data =>
  data
    .split(/\n/)
    .reverse()
    .slice(1)
    .reduce(
      (accum, curr) => {
        const col1 = curr.charAt(1)
        const col2 = curr.charAt(5)
        const col3 = curr.charAt(9)

        return [
          [...accum[0], col1],
          [...accum[1], col2],
          [...accum[2], col3],
        ]
      },
      [[], [], []],
    )
    .map(stack => stack.filter(item => item != ' '))

const digitsRegex = /\d+/g

const parseCommands = data =>
  data.split(/\n/).map(line => {
    const nums = line.matchAll(digitsRegex)
    return {
      count: +nums.next().value,
      target: +nums.next().value - 1,
      destination: +nums.next().value - 1,
    }
  })

const getCommandsAndStartState = parser => data => {
  const [startChunk, commandsChunk] = data.split(/\n\n/)

  const startState = parser(startChunk)

  const commands = parseCommands(commandsChunk)

  return { commands, startState }
}

const getCommandsAndStartStateForPuzzle =
  getCommandsAndStartState(parsePuzzleStart)
const getCommandsAndStartStateForTest = getCommandsAndStartState(parseTestStart)

const sortBoxes =
  moveSelector =>
  (state, { count, target, destination }) => {
    const move = moveSelector(state[target], count)

    return state.map((column, index) =>
      index === target
        ? column.slice(0, column.length - count)
        : index === destination
        ? [...column, ...move]
        : column,
    )
  }

export {
  getCommandsAndStartStateForPuzzle,
  getCommandsAndStartStateForTest,
  sortBoxes,
}
