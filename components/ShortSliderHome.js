import Link from "next/link"
import { GifSlider } from "/components"
import * as S from "/styles/ShortSliderHome.styles.js"

export const ShortSliderHome = ({ label, icon, iconColor, seeMorePath, size = "s", gifs }) => {
  return (<>
    <S.ShortSliderHome size={size}>
      <S.SectionInfo>
        <S.SectionIconContainer color={ iconColor }>{ icon }</S.SectionIconContainer>
        <S.SectionName>{ label }</S.SectionName>
      </S.SectionInfo>

      <Link href={ seeMorePath }>
        <S.AllGifsLink>
          <S.AllGifsLabel>All The GIFs</S.AllGifsLabel>
          <S.AllGifsIcon />
        </S.AllGifsLink>
      </Link>

      <GifSlider gifs={gifs} size={size} />
    </S.ShortSliderHome>
  </>)
}