/**
 * Converts a color from RGB to HSL color space
 *
 * @param {Array} rgb R, G, B values of the color (0-255)
 * @returns {Array} H, S, L values of the color (0-360, 0-100, 0-100)
 */
function rgb2hsl(rgb) {
  let [r, g, b] = rgb
  r = bound01(r, 255)
  g = bound01(g, 255)
  b = bound01(b, 255)
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)

  let h,
    s,
    l = max

  let d = max - min
  s = max === 0 ? 0 : d / max

  if (max == min) {
    h = 0 // achromatic
  } else {
    // calculate hue
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h /= 6
  }
  return [h * 360, s * 100, l * 100]
}

/**
 * Normalizes a number to fit into 0-1 range
 *
 * @param {*} n The number to be normalized
 * @param {*} max The maximum range
 * @returns
 */
function bound01(n, max) {
  n = Math.min(max, Math.max(0, parseFloat(n)))

  // Handle floating point rounding errors
  if (Math.abs(n - max) < 0.000001) {
    return 1
  }

  // Convert into [0, 1] range if it isn't already
  return (n % max) / parseFloat(max)
}

export { rgb2hsl }
