import * as React from 'react'
type BreakpointName = keyof typeof breakpoints


const breakpoints: {
  [key: string]: number
} = {
  gtPhone: 500,
  gtMobile: 800,
  gtTablet: 1300,
}


export const Context = React.createContext<{
  breakpoints: {
    active: BreakpointName | undefined
    gtPhone: boolean
    gtMobile: boolean
    gtTablet: boolean
  }
}>({
  breakpoints: {
    active: undefined,
    gtPhone: false,
    gtMobile: false,
    gtTablet: false,
  },
})

export function useBreakpoints() {
  return React.useContext(Context).breakpoints
}