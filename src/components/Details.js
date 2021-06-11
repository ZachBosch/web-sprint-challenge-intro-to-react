import React from 'react'
import styled from 'styled-components'
import theme from '../theme'

const StyledDiv = styled.div`
    color: ${({ theme }) => theme.black};
    background-color: ${({ theme }) => theme.tertiaryColor};
    margin-left: 10%;
    margin-right: 10%;
    border-radius: 10px;
    border: 2px dashed ${({ theme }) => theme.secondaryColor};
    padding: 2rem;
    font-size: 2rem;
    text-shadow: .5px .5px .5px ${({ theme }) => theme.secondaryColor}, .5px .5px .5px ${({ theme }) => theme.secondaryColor};
`

export default function Details(props){
    const { info } = props

    return(
        <StyledDiv>
            <h2>
                Details:
            </h2>
            {
                <ul>
                    <p>Name: {info.name}</p>
                    <p>Gender: {info.gender}</p>
                    <p>BirthYear: {info.birth_year}</p>
                    <p>Height: {info.height}cm</p>
                    <p>Hair: {info.hair_color}</p>
                    <p>EyeColor: {info.eye_color}</p>
                    <p>SkinColor: {info.skin_color}</p>
                    <p>Mass: {info.mass}kg</p>
                </ul>
            }
        </StyledDiv>
    )
}