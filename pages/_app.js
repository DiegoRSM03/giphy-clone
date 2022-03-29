import "/fonts/index.css"
import "/styles/index.css"

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (page => page)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp
