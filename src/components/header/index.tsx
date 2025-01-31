import { useSelector } from 'react-redux'
import { BotaoAdicionar, HeaderContainer, Textos, Titulo } from './style'
import { RootReducer } from '../../store'

const Cabecalho = () => {
  const total = useSelector((state: RootReducer) => state.contato.itens.length)

  return (
    <>
      <HeaderContainer>
        <Titulo>Lista contatos</Titulo>
        <BotaoAdicionar to="/Novo">Adicionar contato</BotaoAdicionar>
        <Textos>Contatos: {total}</Textos>
      </HeaderContainer>
    </>
  )
}

export default Cabecalho
