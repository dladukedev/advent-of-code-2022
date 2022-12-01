import { getMaxCalories } from './part1.js'
import { getTop3MaxCalories } from './part2.js'

const testInput = `1000
2000
3000

4000

5000
6000

7000
8000
9000

10000`

test('December 01 - Part 1', () => {
  expect(getMaxCalories(testInput)).toBe(24000)
})

test('December 01 - Part 2', () => {
  expect(getTop3MaxCalories(testInput)).toBe(45000)
})
