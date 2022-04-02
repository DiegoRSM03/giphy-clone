import styled from "styled-components"

export const NotFoundLayout = styled.div`
  
`

export const MainContent = styled.main`
  margin-bottom: 3rem;
`

export const BackgroundVideo = styled.video`
  position: fixed;
  z-index: -2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const DarkenBackground = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  background-color: rgba(0, 0, 0, .7);
`

export const GoToRootButton = styled.button`
  background-color: ${ props => props.theme.color.lightPurple };
  box-shadow: 0 0 1rem rgba(0, 0, 0, .9);
  font-weight: bold;
  padding: .5rem 3.5rem;

  position: fixed;
  z-index: 2;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
`