import { sum } from '../utils/shared.js'
import { calculatePriority, findSharedItem } from './shared.js'

const chunk = size => (accumulator, current, currentIndex, array) =>
  currentIndex % size !== 0
    ? [
        ...accumulator.slice(0, accumulator.length - 1),
        [...accumulator[accumulator.length - 1], current],
      ]
    : [...accumulator, [current]]

const solvePart2 = data => {
  return data
    .split(/\n/)
    .reduce(chunk(3), [])
    .map(findSharedItem)
    .map(calculatePriority)
    .reduce(sum, 0)
}

export { solvePart2 }
