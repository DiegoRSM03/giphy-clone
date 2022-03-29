import MainLayout from "../layouts/MainLayout"

const Home = () => {
  return (<>
    <span>Holahola</span>
  </>)
}

Home.getLayout = page => {
  return (
    <MainLayout>
      { page }
    </MainLayout>
  )
}

export default Home
