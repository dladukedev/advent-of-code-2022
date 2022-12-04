const toRangePair = line =>
  line.split(',').map(range => {
    const [start, end] = range.split('-')
    return { start: +start, end: +end }
  })

export { toRangePair }
