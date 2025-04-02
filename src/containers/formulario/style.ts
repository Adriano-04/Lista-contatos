import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import { Link } from 'react-router-dom'
import { HeaderContainer } from '../../components/header/style'

export const Titulo = styled.h1`
  text-align: center;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 420px;
  width: 100%;
  margin: 0 auto;
  background-color: ${variaveis.ContatoBackground};
  padding: 24px;
  border-radius: 8px;
  margin-top: 64px;

  input {
    padding: 8px;
  }

  label {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    max-width: 90%;
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 16px;
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

  &:hover {
    filter: brightness(90%);
  }

  @media (max-width: 768px) {
    padding: 6px;
  }
`
export const BotaoVoltar = styled(Link)`
  background-color: ${variaveis.BotaoRemover};
  padding: 8px;
  text-decoration: none;
  border-radius: 8px;
  color: #fff;
  width: 20%;
  margin: 0 auto;
  text-align: center;
  font-weight: bold;
  align-items: center;

  &:hover {
    filter: brightness(80%);
  }

  @media (max-width: 768px) {
    padding: 6px;
  }
`
export const Header = styled(HeaderContainer)`
  padding: 18px;
  margin-bottom: 24px;
`

export const Input = styled.input`
  width: 100%;
  font-size: 14px;
  background-color: transparent;
  border: none;
  border-bottom: 2px solid black;
  outline: none;
`
