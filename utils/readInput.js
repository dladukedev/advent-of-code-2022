import fs from 'fs'
import util from 'util'

const readFile = util.promisify(fs.readFile)

const readInput = async inputPath => await readFile(inputPath, 'utf8')

export { readInput }
