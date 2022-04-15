import styled from "styled-components"

export const LoadingBoxes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;

  width: 100%;
  height: 70vh;
`

export const SingleBox = styled.div`
  background-color: ${ props => props.color };

  width: .7rem;
  height: .7rem;

  animation: 
    loadingAnimation 
    2s 
    ${ props => props.delay } 
    infinite
  ;

  @keyframes loadingAnimation {
    50% {
      width: 1.2rem;
      height: 1.2rem;

      transform: translateY(-200%);
    }
  }
`