import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const CardContato = styled.div`
  padding: 16px;
  background-color: ${variaveis.ContatoBackground};
  border-radius: 12px;
  max-width: 320px;
  width: 100%;
  height: 200px;
  margin-top: 32px;
`
export const NomeContato = styled.h3`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 32px;
  text-align: center;
`
export const LabelContato = styled.label`
  font-size: 18px;
  font-weight: bold;
  display: flex;
  margin: 12px 0;
`
export const InfoContato = styled.input`
  font-size: 16px;
  font-weight: normal;
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  margin-left: 2px;
`
export const BotaoRemover = styled.button`
  padding: 8px;
  background-color: ${variaveis.BotaoRemover};
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 8px;
  border-radius: 8px;
  color: #fff;
`
export const BotaoEditar = styled(BotaoRemover)`
  background-color: ${variaveis.BotaoEditar};
  margin-right: 8px;
`
