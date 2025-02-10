import { useDispatch } from 'react-redux'
import { editar, remover } from '../../store/reducers/contato'
import * as style from './style'
import { useState } from 'react'
import ClassContato from '../../models/contato'

type Props = ClassContato

const Contato = ({ nome, email, numero, id }: Props) => {
  const dispatch = useDispatch()
  const [editando, setEditando] = useState(false)
  const [NovoEmail, setNovoEmail] = useState(email)
  const [NovoNumero, setNovoNumero] = useState(numero)

  const editarSalvar = () => {
    if (editando) {
      dispatch(
        editar({
          nome,
          email: NovoEmail,
          numero: NovoNumero,
          id
        })
      )
    }
    setEditando(!editando)
  }

  return (
    <>
      <style.CardContato>
        <style.NomeContato>{nome}</style.NomeContato>
        <style.LabelContato>
          Email:
          <style.InfoContato
            readOnly={!editando}
            value={NovoEmail}
            onChange={(e) => setNovoEmail(e.target.value)}
          />
        </style.LabelContato>
        <style.LabelContato>
          Telefone:
          <style.InfoContato
            type="number"
            readOnly={!editando}
            value={NovoNumero}
            onChange={(e) => setNovoNumero(Number(e.target.value))}
          />
        </style.LabelContato>
        <style.BotaoEditar onClick={editarSalvar}>
          {editando ? 'Salvar' : 'Editar'}
        </style.BotaoEditar>
        <style.BotaoRemover onClick={() => dispatch(remover(id))}>
          Remover
        </style.BotaoRemover>
      </style.CardContato>
    </>
  )
}

export default Contato
