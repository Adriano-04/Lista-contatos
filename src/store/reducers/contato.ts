import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ClassContato from '../../models/contato'

type ContatosState = {
  itens: ClassContato[]
}

const initialState: ContatosState = {
  itens: []
}
const contatoSlice = createSlice({
  name: 'tarefa',
  initialState,
  reducers: {
    editar: (state, action: PayloadAction<ClassContato>) => {
      const idContato = state.itens.findIndex(
        (contato) => contato.id === action.payload.id
      )

      if (idContato >= 0) {
        state.itens[idContato] = action.payload
      }
    },
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    adicionar: (state, action: PayloadAction<Omit<ClassContato, 'id'>>) => {
      const tarefasExistentes = state.itens.find(
        (tarefa) =>
          tarefa.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (tarefasExistentes) {
        alert('Já existe um contato com esse nome')
      } else {
        const IdContatoAnterior = state.itens[state.itens.length - 1]
        const NovoContato = {
          ...action.payload,
          id: IdContatoAnterior ? IdContatoAnterior.id + 1 : 1
        }
        state.itens.push(NovoContato)
      }
    }
  }
})

export const { editar, remover, adicionar } = contatoSlice.actions

export default contatoSlice.reducer
