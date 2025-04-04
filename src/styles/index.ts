import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  background-color: ${variaveis.Fundo};
  height: 100vh;
  border-radius: 8px;
`
export default GlobalStyle
