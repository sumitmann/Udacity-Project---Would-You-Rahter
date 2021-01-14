export function timeFormatter (timestamp) {
  let time = new Date(timestamp).toLocaleTimeString()
  time = time.substr(0,5)
  return `${time}`
}

export function dateFormatter(timestamp) {
  return new Date(timestamp).toLocaleDateString()
}
