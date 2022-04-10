import { useState } from "react"

import { CgMoreAlt } from "react-icons/cg"
import { RiCloseFill } from "react-icons/ri"

import * as S from "/styles/pages/gif/[slug-and-id].styles.js"

const BigGifInfo = ({ gifInfo }) => {
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  return (
    <S.BigGifInfo>
      <S.SectionTitle>
        { gifInfo.title }

        <S.DetailsIcon>
        { 
          isDetailOpen
          ? <RiCloseFill onClick={() => setIsDetailOpen(false)} />
          : <CgMoreAlt onClick={() => setIsDetailOpen(true)} />
        }
        </S.DetailsIcon>
        
      </S.SectionTitle>

      <S.GifAndDetails>
        <S.BigGif src={ gifInfo.images.original.url } />

        { isDetailOpen && <S.DetailsGifModal>
          <S.DetailModal>Dimensions: { gifInfo.images.original.width } x { gifInfo.images.original.height} px</S.DetailModal>
          <S.DetailModal>Uploaded: { gifInfo.import_datetime }</S.DetailModal>

          <S.DetailModal>Size: { gifInfo.images.original.size }</S.DetailModal>
          <S.DetailModal>Rating: { (gifInfo.rating).toUpperCase() }</S.DetailModal>

          <S.DetailModal>Frames: { gifInfo.images.original.frames }</S.DetailModal>
        </S.DetailsGifModal> }
      </S.GifAndDetails>
    </S.BigGifInfo>
  )
}

export default BigGifInfo