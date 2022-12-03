const calculatePriority = char =>
  char == char.toUpperCase()
    ? char.charCodeAt(0) - 'A'.charCodeAt(0) + 27
    : char.charCodeAt(0) - 'a'.charCodeAt(0) + 1

const findSharedItem = group => {
  const [search, ...remaining] = group

  const set = new Set()
  search.split('').forEach(char => {
    set.add(char)
  })

  for (const key of set.keys()) {
    if (remaining.every(bag => bag.includes(key))) {
      return key
    }
  }
}

export { calculatePriority, findSharedItem }
