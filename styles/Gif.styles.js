import styled from "styled-components"

export const Gif = styled.div`
  position: relative;

  width: ${ props => props.masonryMode ? "100%" : "auto"};
  height: ${ props => props.masonryMode ? "auto" : "100%"};

  overflow: hidden;
  cursor: pointer;
`

export const SmallGif = styled.img`
  width: ${ props => props.masonryMode ? "100%" : "auto"};
  height: ${ props => props.masonryMode ? "auto" : "100%"};

  background-image:
    linear-gradient(45deg, #0D0D0D 25%, transparent 25%), 
    linear-gradient(135deg, #0D0D0D 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #0D0D0D 75%),
    linear-gradient(135deg, transparent 75%, #0D0D0D 75%);
  background-size: 50px 50px;
  background-position:0 0, 25px 0, 25px -25px, 0px 25px; 
  border-radius: ${ props => props.theme.borderRadius.box };
`

export const ActionIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  position: absolute;
  top: .4rem;
  right: .4rem;
`

export const Icon = styled.div`
  color: ${ props => props.theme.color.white };
  font-size: 1.3rem;
  transition: .2s ease 0s;
  filter: drop-shadow(0 0 3px rgba(0, 0, 0, .8));

  &:hover {
    transform: scale(1.2);
  }
`

export const DesignerAvatar = styled.img`
  aspect-ratio: 1/1;
  width: 2rem;
  height: auto;
  object-fit: cover;

  color: transparent;
  position: absolute;
  bottom: .4rem;
  left: .4rem;
`