import { MdNavigateBefore, MdNavigateNext } from "react-icons/md"
import * as S from "/styles/GifSlider.styles.js"

export const GifSlider = ({ gifs }) => {
  console.log(gifs)

  return (
    <S.GifSlider>
      <S.ArrowPrevious>
        <MdNavigateBefore />
      </S.ArrowPrevious>

      <S.ArrowNext>
        <MdNavigateNext />
      </S.ArrowNext>

      <S.GifSliderOverflow>
        { gifs.map(gifInfo => (
          <img src={gifInfo.images.downsized_medium.url} />
        ))}
      </S.GifSliderOverflow>
    </S.GifSlider>
  )
}