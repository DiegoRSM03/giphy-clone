import { MainLayout } from "/layouts"
import { ThemeProvider } from "styled-components"
import globalTheme from "../styles/globalTheme"

const Home = () => {
  return (<>

  </>)
}

Home.getLayout = page => {
  return (
    <ThemeProvider theme={ globalTheme }>
      <MainLayout>
          { page }
      </MainLayout>
    </ThemeProvider>
  )
}

export default Home
