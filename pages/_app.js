import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import { ThemeProvider } from "styled-components"

import { MainLayout } from "/layouts"
import { LoadingBoxes } from "/components"
import globalTheme from "/styles/globalTheme"
import "/fonts/index.css"
import "/styles/index.css"

const MyApp = ({ Component, pageProps }) => {
  const [ loading, setLoading ] = useState(false)
  const router = useRouter()

  // Get component's layout or set MainLayout by default
  const getLayout = Component.getLayout || (page => (
    <MainLayout>
      { page }
    </MainLayout>
  ))

  useEffect(() => {
    const handleStartRedirection = () => setLoading(true)
    const handleEndRedirecion = () => setLoading(false)

    router.events.on('routeChangeStart', handleStartRedirection)
    router.events.on('routeChangeComplete', handleEndRedirecion)

    return () => {
      router.events.off('routeChangeStart', handleStartRedirection)
      router.events.off('routeChangeComplete', handleEndRedirecion)
    }
  }, [router.events])
  
  return (
    <ThemeProvider theme={globalTheme}>
      { getLayout(loading ? <LoadingBoxes /> : <Component {...pageProps} />) }
    </ThemeProvider>
  )
}

export default MyApp
