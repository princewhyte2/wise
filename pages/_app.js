import "../styles/globals.css"
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles"

let theme = createTheme({
  palette: {
    primary: {
      main: "#000066",
    },
    secondary: {
      main: "#FFB521",
    },
  },
})
theme = responsiveFontSizes(theme)
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
