import { useDispatch } from 'react-redux'
import { BotaoSubmit, BotaoVoltar, Form, Header, Input, Titulo } from './style'
import { FormEvent, useState } from 'react'
import { adicionar } from '../../store/reducers/contato'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [numero, setNumero] = useState('')

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
        <div>
          <label htmlFor="nome">Nome: </label>
          <Input
            value={nome}
            type="text"
            id="nome"
            required
            placeholder="Digite o nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <Input
            value={email}
            type="email"
            id="email"
            required
            placeholder="Digite o email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="numero">Número: </label>
          <Input
            value={numero}
            type="number"
            id="numero"
            required
            placeholder="Digite o número"
            onChange={(e) => setNumero(e.target.value)}
            min={0}
          />
        </div>
        <BotaoSubmit type="submit">Adicionar contato</BotaoSubmit>
        <BotaoVoltar type="button" to="/">
          Voltar
        </BotaoVoltar>
      </Form>
    </>
  )
}

export default Formulario
