import { useDispatch, useSelector } from 'react-redux'
import {
  BotaoAdicionar,
  HeaderContainer,
  HeaderItems,
  Pesquisa,
  Textos,
  Titulo
} from './style'
import { RootReducer } from '../../store'
import { pesquisaTermo } from '../../store/reducers/pesquisa'
import icon from '../../assets/images/agenda-svgrepo-com.svg'

const Cabecalho = () => {
  const total = useSelector((state: RootReducer) => state.contato.itens.length)
  const { termo } = useSelector((state: RootReducer) => state.pesquisa)
  const dispatch = useDispatch()

  return (
    <div>
      <HeaderContainer>
        <Titulo>
          <img src={icon} alt="" />
          Contatos
        </Titulo>
        <HeaderItems>
          <div>
            <Pesquisa
              placeholder="Pesquisar (Nomes)"
              type="text"
              value={termo}
              onChange={(e) => dispatch(pesquisaTermo(e.target.value))}
            />
            <BotaoAdicionar to="/Novo">Adicionar contato</BotaoAdicionar>
          </div>
          <div>
            <Textos>Contatos: {total}</Textos>
          </div>
        </HeaderItems>
      </HeaderContainer>
    </div>
  )
}

export default Cabecalho
