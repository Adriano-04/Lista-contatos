import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const HeaderContainer = styled.header`
  background-color: ${variaveis.HeaderBackground};
  padding: 16px;
  border-radius: 8px;
`

export const HeaderItems = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`

export const BotaoAdicionar = styled(Link)`
  padding: 8px;
  background-color: ${variaveis.BotaoAdicionar};
  border: none;
  margin-right: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  color: #fff;
  text-decoration: none;

  &:hover {
    filter: brightness(90%);
  }
`
export const Titulo = styled.h1`
  text-align: center;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  img {
    width: 24px;
    margin-right: 12px;
  }
`

export const Pesquisa = styled.input`
  padding: 4px;
  font-size: 16px;
  margin: 0 8px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;

  @media (max-width: 768px) {
    display: block;
    margin-bottom: 14px;
  }
`

export const Textos = styled.p`
  font-size: 18px;
  display: inline-block;
  font-weight: bold;
  margin-right: auto;

  @media (max-width: 768px) {
    text-align: center;
    margin-top: 12px;
    display: block;
  }
`
