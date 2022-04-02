import { ThemeProvider } from "styled-components"
import { MainLayout } from "/layouts"
import globalTheme from "/styles/globalTheme"
import "/fonts/index.css"
import "/styles/index.css"

const MyApp = ({ Component, pageProps }) => {

  // Get component's layout or set MainLayout by default
  const getLayout = Component.getLayout || (page => (
    <MainLayout>
      { page }
    </MainLayout>
  ))
  
  return (
    <ThemeProvider theme={globalTheme}>
      { getLayout(<Component {...pageProps} />) }
    </ThemeProvider>
  )
}

export default MyApp
