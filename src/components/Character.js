// Write your Character component here
import React, { useState } from 'react'
import styled from 'styled-components'
import Details from './Details'

export default function Character({ info }) {
    const [detailName, setDetailName] = useState(null)
 return (
     <div>
        <p>
            {info.name}
        </p>
        <button onClick={() => detailName !== info.name ? setDetailName(info.name) : setDetailName(null)}>
            {info.birth_year}
        </button>
        {
            detailName === info.name && <Details info={info} />
        }
     </div>
 )}