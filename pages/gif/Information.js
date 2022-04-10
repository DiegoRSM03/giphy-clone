import * as S from "/styles/pages/gif/[slug-and-id].styles.js"

const Information = ({ gifInfo }) => {
  return (
    <S.Information>
      { gifInfo?.user && <S.Owner>
        <S.Avatar
          src={ gifInfo.user.avatar_url }
          width="50"
          height="50"
          alt={ gifInfo.title }
        />

        <S.AccountInfo>
          <S.Name>{ gifInfo.user.display_name }</S.Name>
          <S.Username>
            @{ gifInfo.username }
            { gifInfo.user.is_verified &&  <S.VerifiedIcon /> }
          </S.Username>
        </S.AccountInfo>
      </S.Owner> }

      { (gifInfo?.source || gifInfo?.user?.website_url) && <S.Source>
        <S.SectionTitle>Source</S.SectionTitle>
        <S.SourceUrl href={ gifInfo.source || gifInfo.user.website_url } >
          <S.SourceIcon />
          { (gifInfo.source || gifInfo.user.website_url).replace("https://", "") }
        </S.SourceUrl>
      </S.Source> }

      <S.VirtualBackgroundAdvice>
        <S.SectionTitle>Make Your Own Virtual Background</S.SectionTitle>
        <S.GifVirtualBackground 
          src="/virtual-background-advice.gif"
        />
        <S.LearnMoreButton href="https://giphy.com/backdrop" >Learn More</S.LearnMoreButton>
      </S.VirtualBackgroundAdvice>
    </S.Information>
  )
}

export default Information