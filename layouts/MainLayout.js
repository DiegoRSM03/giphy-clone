import Head from "next/head"
import { Navbar, Footer, Searchbox } from "/components"
import * as S from "/styles/layouts/MainLayout.styles.js"

export const MainLayout = ({ children }) => {
  return (<>
    <S.MainLayout>
      <Head>
        <title>GIPHY - Clon</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <Searchbox />

      <S.MainContent>
        { children }
      </S.MainContent>

      <Footer />
    </S.MainLayout>
  </>)
}