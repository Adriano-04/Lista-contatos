import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'
import { HeaderContainer } from '../../components/header/style'

export const Titulo = styled.h1`
  text-align: center;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 420px;
  width: 100%;
  margin: 0 auto;

  input {
    padding: 8px;
  }

  label {
    margin: 8px 0;
    font-weight: bold;
  }
`
export const BotaoSubmit = styled.button`
  width: 50%;
  margin: 16px auto;
  padding: 10px;
  background-color: ${variaveis.BotaoAdicionar};
  border: none;
  color: #fff;
  font-weight: bold;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`
export const BotaoVoltar = styled(Link)`
  background-color: ${variaveis.BotaoRemover};
  padding: 8px;
  text-decoration: none;
  border-radius: 8px;
  color: #fff;
  font-weight: bold;
`
export const Header = styled(HeaderContainer)`
  padding: 18px;
  margin-bottom: 24px;
`
