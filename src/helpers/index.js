export function cardExtraClassGenerator(length) {
  if (length === 1) {
    return 'full_width-card'
  } else if (length === 2) {
    return 'half_width-card'
  } else {
      return 'gallery-card'
  }
}
