import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { Link } from 'react-router-dom'

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; }
  body { margin: 0; font-family: "Inter", system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji", "Segoe UI Emoji"; background: #fff; color: #111; }
`

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`

const Brand = styled.h1`
  font-size: 24px;
  font-weight: 700;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
`

const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  overflow: hidden;
  background: #fafafa;
`

const CardImage = styled.div`
  height: 160px;
  background: #ddd;
`

const CardBody = styled.div`
  padding: 16px;
`

const Title = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 8px;
`

const Description = styled.p`
  font-size: 14px;
  margin: 0 0 12px;
  color: #555;
`

const Button = styled(Link)`
  display: inline-block;
  padding: 10px 14px;
  background: #e4105d;
  color: #fff;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
`

const Home: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header>
          <Brand>efood</Brand>
          <nav>
            <Link to="/restaurante">Ir ao restaurante</Link>
          </nav>
        </Header>

        <Grid>
          {[...Array(8)].map((_, i) => (
            <Card key={i}>
              <CardImage />
              <CardBody>
                <Title>Produto {i + 1}</Title>
                <Description>Descrição do produto seguindo layout do Figma.</Description>
                <Button to="/restaurante">Comprar</Button>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default Home