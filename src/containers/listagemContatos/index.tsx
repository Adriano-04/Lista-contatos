import { useSelector } from 'react-redux'
import Contato from '../../components/contato'
import { Listagem } from './style'
import { RootReducer } from '../../store'

const Contatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contato)
  const { termo } = useSelector((state: RootReducer) => state.pesquisa)

  const filtraPesquisado = () => {
    const contatos = itens

    if (termo) {
      return contatos.filter((contato) =>
        contato.nome.toLowerCase().includes(termo.toLowerCase())
      )
    } else {
      return itens
    }
  }

  const contatosDisponiveis = filtraPesquisado()

  return (
    <>
      {filtraPesquisado().length === 0 ? (
        <h3 style={{ margin: '64px', textAlign: 'center' }}>
          Nenhum resultado encontrado
        </h3>
      ) : (
        <Listagem>
          {contatosDisponiveis.map((contato) => (
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
      )}
    </>
  )
}

export default Contatos
