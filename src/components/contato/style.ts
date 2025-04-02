import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const CardContato = styled.div`
  padding: 16px;
  background-color: ${variaveis.ContatoBackground};
  position: relative;
  border-radius: 12px;
  max-width: 320px;
  width: 100%;
  height: 200px;
  margin-top: 32px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

  img {
    width: 24px;
    position: absolute;
    right: 8px;
  }
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
  margin-left: 8px;
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

  &:hover {
    filter: brightness(80%);
  }
`
export const BotaoEditar = styled(BotaoRemover)`
  background-color: ${variaveis.BotaoEditar};
  margin-right: 8px;

  &:hover {
    filter: brightness(90%);
  }
`
