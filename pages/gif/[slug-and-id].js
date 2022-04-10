import Head from "next/head"
import Masonry from "react-responsive-masonry"

import Information from "./Information"
import BigGifInfo from "./BigGifInfo"
import Actions from "./Actions"

import { Gif as MiniGif } from "/components"
import { giphyApi } from "/api"
import * as S from "/styles/pages/gif/[slug-and-id].styles.js"

const Gif = ({ gifInfo, relatedGifs }) => {
  return (<>
    <Head>
      <title>{ gifInfo.title }</title>
    </Head>

    {/* This 'Gif' container is a grid container with grid-template-area prop */}
    <S.Gif>
      <Information gifInfo={ gifInfo } />
      <BigGifInfo gifInfo={ gifInfo } />
      <Actions />

      <S.RelatedGifs>
        <S.RelatedTitle>Related GIFs</S.RelatedTitle>
        <Masonry columnsCount={3} gutter="1rem">
          { relatedGifs.map(gifInfo => (
            <MiniGif key={gifInfo.id} gifInfo={gifInfo} masonryMode />
          )) }
        </Masonry>
      </S.RelatedGifs>
    </S.Gif>
  </>)
}

export const getServerSideProps = async ({ params }) => {
  const API_KEY = process.env.API_KEY
  const gifId = params["slug-and-id"].split("-").slice(-1)
  const gifSlug = params["slug-and-id"].replace("-" + gifId, "")

  const giphyRequests = [
    giphyApi.get(`/gifs/${ gifId }?api_key=${API_KEY}`),
    giphyApi.get(`/gifs/search?api_key=${API_KEY}&limit=30&bundle=low_bandwidth&q=${ gifSlug }`)
  ]

  const requestsResult = await Promise.allSettled(giphyRequests)

  const gifInfo = requestsResult[0].value.data.data
  const relatedGifs = requestsResult[1].value.data.data

  return {
    props: {
      gifInfo,
      relatedGifs
    }
  }
}

export default Gif