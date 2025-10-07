import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 16px;
`

const Title = styled.h2`
  font-size: 22px;
  font-weight: 700;
  margin: 0 0 16px;
`

const Box = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 16px;
  background: #fafafa;
`

const Restaurante: React.FC = () => {
  return (
    <Container>
      <Title>Restaurante</Title>
      <Box>
        Estrutura inicial de checkout conforme Figma.
      </Box>
    </Container>
  )
}

export default Restaurante