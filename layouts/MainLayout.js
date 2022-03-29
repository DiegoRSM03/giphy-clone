import Head from "next/head"

const MainLayout = ({ children }) => {
  return (<>
    <Head>
      <title>Giphy Clone</title>
      <meta name="description" content="Home Page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      { children }
    </main>
  </>)
}

export default MainLayout