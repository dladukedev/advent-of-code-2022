import { solvePart1 } from './part1.js'
import { solvePart2 } from './part2.js'

const testInput = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`

test('December 07 - Part 1', () => {
  expect(solvePart1(testInput)).toBe(95437)
})

test('December 07 - Part 2', () => {
  expect(solvePart2(testInput)).toBe(24933642)
})
