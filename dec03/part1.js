import { sum } from '../utils/shared.js'
import { calculatePriority, findSharedItem } from './shared.js'

const splitIntoCompartments = sack => {
  var middle = Math.floor(sack.length / 2)
  return [sack.substr(0, middle), sack.substr(middle)]
}

const solvePart1 = data => {
  return data
    .split(/\n/)
    .map(splitIntoCompartments)
    .map(findSharedItem)
    .map(calculatePriority)
    .reduce(sum, 0)
}

export { solvePart1 }
