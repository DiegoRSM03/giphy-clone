import { useState } from "react"
import Link from "next/link"
import { HiLink, HiHeart } from "react-icons/hi"
import * as S from "/styles/Gif.styles.js"

export const Gif = ({ gifInfo, masonryMode }) => {
  const [ shouldDisplayActions, setShouldDisplayActions ] = useState(false)

  return (
    <S.Gif 
      onMouseEnter={() => setShouldDisplayActions(true)}
      onMouseLeave={() => setShouldDisplayActions(false)}
      masonryMode={masonryMode}
    >
      <Link href={ "/gif/" + gifInfo.slug }>
        <S.SmallGif
          src={ gifInfo.images.downsized.url }
          alt={ gifInfo.title }
          masonryMode={masonryMode}
        />
      </Link>

      { shouldDisplayActions && <S.ActionIcons>
        <S.Icon> <HiLink /> </S.Icon>
        <S.Icon> <HiHeart /> </S.Icon>
      </S.ActionIcons> }

      { (gifInfo.user?.avatar_url && shouldDisplayActions) && <S.DesignerAvatar 
        src={ gifInfo.user?.avatar_url }
        alt={ gifInfo.user?.username }
      /> }
    </S.Gif>
  )
}