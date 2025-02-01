import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Pesquisa = {
  termo: string
}

const initialState: Pesquisa = {
  termo: ''
}

const pesquisaSlice = createSlice({
  name: 'pesquisa',
  initialState,
  reducers: {
    pesquisaTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { pesquisaTermo } = pesquisaSlice.actions

export default pesquisaSlice.reducer
