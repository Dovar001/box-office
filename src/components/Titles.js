import React from 'react'
import { TitleWrapper } from './Title.styled'

const Titles = ({title,subtitle}) => (
        <TitleWrapper>
            <h1>{title}</h1>
            <p>{subtitle}</p>
        </TitleWrapper>
    )

export default Titles
