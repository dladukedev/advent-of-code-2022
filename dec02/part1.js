const rock = 1
const paper = 2
const scissors = 3

const isMineWinner = (yours, mine) => {
  return (
    (mine === rock && yours === scissors) ||
    (mine === paper && yours === rock) ||
    (mine === scissors && yours === paper)
  )
}

const getRoundScore = (yours, mine) => {
  const myChoiceScore = mine

  const resultScore = mine === yours ? 3 : isMineWinner(yours, mine) ? 6 : 0

  return myChoiceScore + resultScore
}

const mapMine = mine => {
  switch (mine) {
    case 'X':
      return rock
    case 'Y':
      return paper
    case 'Z':
      return scissors
    default:
      console.error(`Invalid input mine=${mine}`)
  }
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
    .map(game => ({ yours: mapYours(game[0]), mine: mapMine(game[1]) }))
}

export { getRoundScore, parseInput }

const getScore = data => {
  const games = parseInput(data)

  return games
    .map(({ yours, mine }) => getRoundScore(yours, mine))
    .reduce((accum, curr) => accum + curr, 0)
}

export { getScore }
