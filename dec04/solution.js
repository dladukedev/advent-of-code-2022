import { URL, fileURLToPath } from 'url'
import { readInput } from '../utils/readInput.js'
import { solvePart1 } from './part1.js'
import { solvePart2 } from './part2.js'

const inputPath = fileURLToPath(new URL('./input.txt', import.meta.url))

const data = await readInput(inputPath)

const part1Solution = solvePart1(data)
console.log(`Part 1 - ${part1Solution}`)
const part2Solution = solvePart2(data)
console.log(`Part 2 - ${part2Solution}`)
