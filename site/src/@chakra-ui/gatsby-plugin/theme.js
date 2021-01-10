import { extendTheme } from "@chakra-ui/react"
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "30em",
  md: "769px",
  lg: "calc(960px + (2 * 32))",
  xl: "calc(1152px + (2 * 32))",
})

const theme = extendTheme({
  colors: {
    primary: {
      "50": "#e9ebf9",
      "100": "#c6ccf0",
      "200": "#a1abe5",
      "300": "#7a8adb",
      "400": "#5c6fd3",
      "500": "#3c55cb",
      "600": "#364dc0",
      "700": "#2c42b4",
      "800": "#2338a8",
      "900": "#112594",
    },
  },
  breakpoints,
})

export default theme
