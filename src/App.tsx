import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import GlobalStyle, { Container } from './styles'
import store from './store'
import Home from './pages/Home'
import NovoContato from './pages/NovoContato'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/Novo',
    element: <NovoContato />
  }
])

function App() {
  return (
    <>
      <Provider store={store}>
        <Container>
          <GlobalStyle />
          <RouterProvider router={rotas} />
        </Container>
      </Provider>
    </>
  )
}

export default App
