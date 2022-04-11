
import './App.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components'


const Page = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
`;

const Container = styled.div`
  font-family: 'Montserrat', sans-serif;
  margin: 2rem;

`;

const Title = styled.h1`
  width: 100%;
  font-size: 45px;
  font-weight: 700;
  font-family: 'Grape Nuts', cursive;
`;

const Desc = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const Image = styled.img`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px, rgb(51, 51, 51) 0px 0px 0px 3px;
`;

function App() {

  const [ personajes, setPersonajes ] = useState([])

  useEffect(() => {
    obtenerDatos()
  }, [])

  const obtenerDatos = async() => {
    const resp = await fetch('https://rickandmortyapi.com/api/character/')
    const data = await resp.json()
    setPersonajes(data.results)
  }

  return (
    <Page className="App">
        <Title>Ricky and Morty</Title>
        {
          personajes
          .filter(p => p.id !== 19)
          .map(p => (
            <Container key={p.id}>
              <Image src={p.image} alt='personaje' />
              <h3>Name: {p.name}</h3>  
              <Desc>Status: {p.status}</Desc>
              <Desc>Species: {p.species}</Desc>
            </Container>
          ))
        }
    </Page>
  );
}

export default App;
