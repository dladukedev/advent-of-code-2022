import { sum, chunk } from '../utils/shared.js'
import { calculatePriority, findSharedItem } from './shared.js'

const solvePart2 = data => {
  return data
    .split(/\n/)
    .reduce(chunk(3), [])
    .map(findSharedItem)
    .map(calculatePriority)
    .reduce(sum, 0)
}

export { solvePart2 }
