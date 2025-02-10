import { useSelector } from 'react-redux'
import Cabecalho from '../../components/header'
import Contatos from '../../containers/listagemContatos'
import { RootReducer } from '../../store'

const Home = () => {
  const totalContatos = useSelector(
    (state: RootReducer) => state.contato.itens.length
  )

  return (
    <>
      <Cabecalho />
      {totalContatos === 0 ? (
        <h3 style={{ margin: '64px', textAlign: 'center' }}>
          Você não possui nenhum contato adicionado.
        </h3>
      ) : (
        <Contatos />
      )}
    </>
  )
}

export default Home
