import Head from "next/head"
import Link from "next/link"
import { Navbar, Searchbox } from "/components"
import * as S from "/styles/layouts/404Layout.styles.js"

export const NotFoundLayout = ({ children }) => {
  return (
    <S.NotFoundLayout>
      <Head>
        <title>404 Not Found</title>
        <meta name="description" content="Not Found Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
 
      <Navbar />
      <Searchbox />

      <S.BackgroundVideo 
        src="/404-background.mp4" 
        type="video/mp4"
        autoPlay 
        loop 
        playsinline
      />

      <S.DarkenBackground />

      <Link href="/">
        <S.GoToRootButton>Continue to Our Homepage</S.GoToRootButton>
      </Link>

      <S.MainContent>
        { children }
      </S.MainContent>
    </S.NotFoundLayout>
  )
}