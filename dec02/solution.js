import { URL, fileURLToPath } from 'url'
import { readInput } from '../utils/readInput.js'
import { getScore } from './part1.js'
import { getTargetScore } from './part2.js'

const inputPath = fileURLToPath(new URL('./input.txt', import.meta.url))

const data = await readInput(inputPath)

const part1Solution = getScore(data)
console.log(`Part 1 - ${part1Solution}`)
const part2Solution = getTargetScore(data)
console.log(`Part 2 - ${part2Solution}`)
