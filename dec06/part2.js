import { windowed, isUniqueArray } from '../utils/shared.js'

const solvePart2 = data =>
  data.split('').reduce(windowed(14), []).findIndex(isUniqueArray) + 14

export { solvePart2 }
