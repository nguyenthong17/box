function isEmpty (input) {
  if (input === '') return true
  return false
}

function hasSpace (input) {
  if (input.includes(' ')) return true
  return false
}

function is8Chars (input) {
  if (input.length < 8) return false
  return true
}

module.exports = {isEmpty, is8Chars, hasSpace}