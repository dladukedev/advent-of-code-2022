import { windowed } from '../utils/shared.js'

const isUniqueArray = array => [...new Set(array)].length === array.length

const solvePart1 = data =>
  data.split('').reduce(windowed(4), []).findIndex(isUniqueArray) + 4

export { solvePart1 }
