import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'
import styled from 'styled-components'

const StyledHeader = styled.h1`
  color: ${({ theme }) => theme.black};
  text-shadow: 1px 1px 5px ${({ theme }) => theme.primaryColor};
  margin: 2% 24% 0% 60%;
  font-size: 3rem;
`
const StyledSubHead = styled.h4`
  color: ${({ theme }) => theme.secondaryColor};
  margin: 0.5% 24% 3% 60%;
`

const App = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    axios
    .get('https://swapi.dev/api/people')
    .then(res => {
      setCharacters(res.data)
      console.log('res', res.data)
    })
    .catch(err => {
      console.log('AXIOS DID NOT FETCH', err)
    })
  },[])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <StyledHeader className="Header">Characters</StyledHeader>
      <StyledSubHead>The Empire did nothing wrong</StyledSubHead>
      {
        characters.map((char, idx) => {
          return <Character key={idx} info={char} />
        })
      }
    </div>
  );
}

export default App;
