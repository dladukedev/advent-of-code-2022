import { solvePart1 } from './part1.js'
import { parseTestStart } from './shared.js'
import { solvePart2 } from './part2.js'

const testInput = `    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`

test('December 05 - Part 1', () => {
  expect(solvePart1(testInput, parseTestStart)).toBe('CMZ')
})

test('December 05 - Part 2', () => {
  expect(solvePart2(testInput, parseTestStart)).toBe('MCD')
})
