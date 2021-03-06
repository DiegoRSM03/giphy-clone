import Head from "next/head"
import { Navbar, Searchbox } from "/components"
import * as S from "/styles/layouts/MainLayout.styles.js"

export const MainLayout = ({ children }) => {
  return (<>
    <S.MainLayout>
      <Head>
        <title>GIPHY - Be Animated</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Navbar />
      <Searchbox />

      <S.MainContent>
        { children }
      </S.MainContent>
    </S.MainLayout>
  </>)
}