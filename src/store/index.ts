import { configureStore } from '@reduxjs/toolkit'
import contatoReducer from './reducers/contato'
import pesquisaReducer from './reducers/pesquisa'

const store = configureStore({
  reducer: {
    contato: contatoReducer,
    pesquisa: pesquisaReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
