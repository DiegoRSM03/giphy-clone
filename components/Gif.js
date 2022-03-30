import * as S from "/styles/Gif.styles.js"

export const Gif = ({ gifInfo }) => {
  return (
    <S.Gif>
      <S.SmallGif
        src={gifInfo.images.downsized.url}
      />
    </S.Gif>
  )
}