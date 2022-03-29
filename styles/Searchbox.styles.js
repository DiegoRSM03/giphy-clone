import styled from "styled-components"

export const Searchbox = styled.div`
  display: flex;
  height: 53px;
  margin-top: 1rem;
`

export const TextFieldSearch = styled.input`
  width: 100%;
  height: 100%;

  color: ${ props => props.theme.color.gray };
  font-size: 1.2rem;
  padding: 0 1rem;
`

export const ButtonSearch = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: linear-gradient(120deg, #E65A8A, ${ props => props.theme.color.purple });
  font-size: 2rem;
  transform: rotateY(-180deg);

  width: 5%;
  height: 100%;
`