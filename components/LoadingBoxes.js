import * as S from "/styles/components/LoadingBoxes.styles.js"

export const LoadingBoxes = () => {
  return (
    <S.LoadingBoxes>
      <S.SingleBox color="#2eed7c" delay="0s" />
      <S.SingleBox color="#09efd3" delay=".2s" />
      <S.SingleBox color="#ad09ef" delay=".4s" />
      <S.SingleBox color="#f35949" delay=".6s" />
      <S.SingleBox color="#f3e649" delay=".8s" />
    </S.LoadingBoxes>
  )
}