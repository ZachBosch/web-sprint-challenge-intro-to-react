import React from 'react'
import styled from 'styled-components'

export default function Details(props){
    const { info } = props

    return(
        <div>
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
        </div>
    )
}