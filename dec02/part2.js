const win = 'Z'
const draw = 'Y'
const loss = 'X'

const rock = {
  [win]: 2,
  [draw]: 1,
  [loss]: 3,
}
const paper = {
  [win]: 3,
  [draw]: 2,
  [loss]: 1,
}
const scissors = {
  [win]: 1,
  [draw]: 3,
  [loss]: 2,
}

const mapYours = yours => {
  switch (yours) {
    case 'A':
      return rock
    case 'B':
      return paper
    case 'C':
      return scissors
    default:
      console.error(`Invalid input yours=${yours}`)
  }
}

const parseInput = data => {
  return data
    .split(/\n/)
    .map(line => line.split(' '))
    .map(game => {
      const [yoursKey, result] = game
      const yours = mapYours(yoursKey)
      const mine = yours[result]

      return { yours, mine, result }
    })
}

const getResultScore = result => {
  if (result === win) return 6
  else if (result === draw) return 3
  else if (result === loss) return 0
  else console.error(`Invalid input result=${result}`)
}

const getScoreResult = ({ mine, result }) => {
  const myScore = mine

  const resultScore = getResultScore(result)

  return myScore + resultScore
}

const getTargetScore = data =>
  parseInput(data)
    .map(round => getScoreResult(round))
    .reduce((accum, curr) => accum + curr, 0)

export { getTargetScore }
