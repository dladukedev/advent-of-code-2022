import { URL, fileURLToPath } from 'url'
import { readInput } from "../utils/readInput.js"
import { getMaxCalories } from './part1.js'
import { getTop3MaxCalories } from './part2.js'

const inputPath = fileURLToPath(new URL('./input.txt', import.meta.url))

const data = await readInput(inputPath)

const part1Solution = getMaxCalories(data)
console.log(`Part 1 - ${part1Solution}`)
const part2Solution = getTop3MaxCalories(data)
console.log(`Part 2 - ${part2Solution}`)