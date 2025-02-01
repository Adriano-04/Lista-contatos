import { useDispatch, useSelector } from 'react-redux'
import {
  BotaoAdicionar,
  HeaderContainer,
  Pesquisa,
  Textos,
  Titulo
} from './style'
import { RootReducer } from '../../store'
import { pesquisaTermo } from '../../store/reducers/pesquisa'

const Cabecalho = () => {
  const total = useSelector((state: RootReducer) => state.contato.itens.length)
  const { termo } = useSelector((state: RootReducer) => state.pesquisa)
  const dispatch = useDispatch()

  return (
    <>
      <HeaderContainer>
        <Titulo>Lista contatos</Titulo>
        <BotaoAdicionar to="/Novo">Adicionar contato</BotaoAdicionar>
        <Pesquisa
          placeholder="Pesquisar (Nomes)"
          type="text"
          value={termo}
          onChange={(e) => dispatch(pesquisaTermo(e.target.value))}
        />
        <Textos>Contatos: {total}</Textos>
      </HeaderContainer>
    </>
  )
}

export default Cabecalho
