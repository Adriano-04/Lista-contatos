import { useDispatch, useSelector } from 'react-redux'
import Contato from '../../components/contato'
import { Listagem } from './style'
import { RootReducer } from '../../store'

const Contatos = () => {
  const dispatch = useDispatch()
  const { itens } = useSelector((state: RootReducer) => state.contato)

  return (
    <Listagem>
      {itens.map((contato) => (
        <li key={contato.nome}>
          <Contato
            nome={contato.nome}
            email={contato.email}
            numero={contato.numero}
            id={contato.id}
          />
        </li>
      ))}
    </Listagem>
  )
}

export default Contatos
