import { ThemeProvider } from "styled-components"

import { FiTrendingUp } from "react-icons/fi"
import { TiFlashOutline } from "react-icons/ti"
import { MdSportsSoccer } from "react-icons/md"
import { BiBone } from "react-icons/bi"

import { MainLayout } from "/layouts"
import globalTheme from "/styles/globalTheme"
import { giphyApi } from "/api"
import { ShortSliderHome } from "/components"
import * as S from "/styles/Home.styles.js"

const Home = ({ trendingGifs, artistsGifs, footballGifs, dogsGifs }) => {
  return (<>
    <S.Home>
      <S.CasualBanner 
        src="/top-banner-ukraine.gif"
        width="1040"
        height="96"
        loading="eager"
      />

      <ShortSliderHome 
        label="Trending" 
        icon={<FiTrendingUp />}
        iconColor="#0EBBFF"
        seeMorePath="/trending"
        gifs={trendingGifs}
      />

      <ShortSliderHome 
        label="Artists" 
        icon={<TiFlashOutline />}
        iconColor="#FD646C"
        seeMorePath="/artists"
        size="m"
        gifs={artistsGifs}
      />

      <ShortSliderHome 
        label="Football" 
        icon={<MdSportsSoccer />}
        iconColor="#00E1D5"
        seeMorePath="/search/football"
        gifs={footballGifs}
      />

      <ShortSliderHome 
        label="Dogs" 
        icon={<BiBone />}
        iconColor="#8E33F1"
        seeMorePath="/search/dogs"
        gifs={dogsGifs}
      />
    </S.Home>
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

export async function getStaticProps () {
  const API_KEY = process.env.API_KEY

  const giphyRequests = [
    giphyApi.get(`/gifs/trending?api_key=${API_KEY}&bundle=low_bandwidth&limit=15`),
    giphyApi.get(`/stickers/search?api_key=${API_KEY}&limit=15&bundle=low_bandwidth&q=artists`),
    giphyApi.get(`/gifs/search?api_key=${API_KEY}&limit=15&bundle=low_bandwidth&q=soccer`),
    giphyApi.get(`/gifs/search?api_key=${API_KEY}&limit=15&bundle=low_bandwidth&q=dogs`)
  ]

  const requestsResult = await Promise.allSettled(giphyRequests)

  const trendingGifs = requestsResult[0].value.data.data
  const artistsGifs = requestsResult[1].value.data.data
  const footballGifs = requestsResult[2].value.data.data
  const dogsGifs = requestsResult[3].value.data.data

  return {
    props: {
      trendingGifs,
      artistsGifs,
      footballGifs,
      dogsGifs
    }
  }
}

export default Home
