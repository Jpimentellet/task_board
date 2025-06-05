const getIncreasedColor = (color:number, factor: number) =>
  Math.min(255, Math.round(color + (255 - color) * factor))

const getHexLightenedColor = (hex: string | null | undefined, factor = 0.5) => {
  if (!hex) return
  hex = hex.replace('#', '')
  const r = getIncreasedColor(parseInt(hex.substring(0, 2), 16), factor)
  const g = getIncreasedColor(parseInt(hex.substring(2, 4), 16), factor)
  const b = getIncreasedColor(parseInt(hex.substring(4, 6), 16), factor)

  return `
    #${((1 << 24) | (r << 16) | (g << 8) | b)
      .toString(16)
      .slice(1)
      .toUpperCase()}
  `
}

export { getHexLightenedColor }