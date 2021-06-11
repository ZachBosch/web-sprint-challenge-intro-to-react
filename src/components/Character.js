// Write your Character component here
import React, { useState } from 'react'
import styled from 'styled-components'
import Details from './Details'

const StyledDiv = styled.div`
color: ${({ theme }) => theme.secondaryColor};
background-color: ${({ theme }) => theme.black};
margin: 2% 10% 3% 45%;
opacity: 80%;
border: 2px solid ${({ theme }) => theme.primaryColor};
border-radius: 10px;
display: flex;
justify-content: space-between;
align-items: center;
padding: 1rem 0rem 1rem 2rem;
font-size: 1.5rem;
`
const Btn = styled.button`
color: ${({ theme }) => theme.primaryColor};
background-color: ${({ theme }) => theme.black};
border: 1.5px solid ${({ theme }) => theme.primaryColor};
width: 6rem;
height: 3rem;
margin: 1rem 2rem 1rem 0rem;
border-radius: 10px;
font-size: 1rem;
&:hover {
    color: ${({ theme }) => theme.secondaryColor};
    transition: all 0.35s ease-in-out;
    transform: scale(1.2);
}
transition: all 0.25s ease-in-out;
`

export default function Character({ info }) {
    const [detailName, setDetailName] = useState(null)
 return (
     <StyledDiv>
        <p>
            {info.name}
        </p>
        <Btn onClick={() => detailName !== info.name ? setDetailName(info.name) : setDetailName(null)}>
            {info.birth_year}
        </Btn>
        {
            detailName === info.name && <Details info={info} />
        }
     </StyledDiv>
 )}