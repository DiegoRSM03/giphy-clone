import styled from "styled-components"

export const Gif = styled.div`
  position: relative;
  height: 100%;
  border-radius: ${ props => props.theme.borderRadius.box };
  overflow: hidden;
  cursor: pointer;
`

export const SmallGif = styled.img`
  width: auto;
  height: 100%;
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