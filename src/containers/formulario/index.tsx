import { useDispatch } from 'react-redux'
import { BotaoSubmit, BotaoVoltar, Form, Header, Titulo } from './style'
import { FormEvent, useState } from 'react'
import { adicionar } from '../../store/reducers/contato'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState(Number)

  const novoContato = (e: FormEvent) => {
    e.preventDefault()

    dispatch(
      adicionar({
        nome,
        email,
        numero
      })
    )
    navigate('/')
  }

  return (
    <>
      <Header>
        <Titulo>Novo contato</Titulo>
      </Header>
      <Form onSubmit={novoContato}>
        <label htmlFor="nome">Nome: </label>
        <input
          value={nome}
          type="text"
          id="nome"
          required
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />
        <label htmlFor="email">Email: </label>
        <input
          value={email}
          type="email"
          id="email"
          required
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="numero">Numero: </label>
        <input
          value={numero}
          type="number"
          id="numero"
          required
          placeholder="Número"
          onChange={(e) => setNumero(Number(e.target.value))}
          min={0}
        />
        <BotaoSubmit type="submit">Adicionar contato</BotaoSubmit>
      </Form>
      <BotaoVoltar type="button" to="/">
        Voltar
      </BotaoVoltar>
    </>
  )
}

export default Formulario
