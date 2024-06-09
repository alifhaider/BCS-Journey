export const color = {
  blue_600: '#0077FF',
  blue_300: '#87CEFA',
  blue_100: '#B0E2FF',

  yellow_500: '#FFA500',
  yellow_300: '#FFD700',

  green_400: '#00CDAC',
  green_200: '#7FFFD4',

  red_300: '#FF6F61',

  purple_700: '#9B30FF',

  white_600: '#E6E6FA',

  black_800: '#1A1A1A',

  grey_400: '#808080',
  grey_300: '#A9A9A9',
  grey_200: '#D3D3D3',
} as const

export const space = {
  _2xs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  _2xl: 24,
  _3xl: 28,
  _4xl: 32,
  _5xl: 40,
} as const

export const fontSize = {
  _2xs: 10,
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  _2xl: 22,
  _3xl: 26,
  _4xl: 32,
  _5xl: 40,
} as const

export const lineHeight = {
  none: 1,
  normal: 1.5,
  relaxed: 1.625,
} as const

export const borderRadius = {
  _2xs: 2,
  xs: 4,
  sm: 8,
  md: 12,
  full: 999,
} as const

export const fontWeight = {
  normal: '400',
  semibold: '500',
  bold: '600',
} as const

export type Color = keyof typeof color
export type Space = keyof typeof space
export type FontSize = keyof typeof fontSize
export type LineHeight = keyof typeof lineHeight
export type BorderRadius = keyof typeof borderRadius
export type FontWeight = keyof typeof fontWeight
