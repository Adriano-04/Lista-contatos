import { Link } from 'react-router-dom'
import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const HeaderContainer = styled.header`
  background-color: ${variaveis.HeaderBackground};
  padding: 16px;
  border-radius: 8px;
`
export const BotaoAdicionar = styled(Link)`
  padding: 8px;
  background-color: ${variaveis.BotaoAdicionar};
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
  border-radius: 8px;
  color: #fff;
  text-decoration: none;
`
export const Titulo = styled.h1`
  text-align: center;
  margin-bottom: 12px;
`

export const Pesquisa = styled.input`
  padding: 4px;
  font-size: 16px;
  margin: 0 8px;
`

export const Textos = styled.p`
  font-size: 16px;
  display: inline-block;
  font-weight: bold;
  margin-right: auto;
`
