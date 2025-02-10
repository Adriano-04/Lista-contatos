import styled from 'styled-components'

export const Listagem = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 0;
  margin-left: 64px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin-left: 18px;
  }

  li {
    margin-right: 12px;
    text-align: center;
    max-width: 95%;
  }
`
