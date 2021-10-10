import React from 'react'
import { TitleWrapper } from './Title.styled'

const Titles = ({title,subtitle}) => (
        <TitleWrapper>
            <h1>{title}</h1>
             <h4 style={{color:'#ddd'}} >Made by<a style={{textDecoration:'none',color:'#2400ff'}} href="https://github.com/Dovar001"> <bold>Dovar001</bold></a></h4> 
            <p>{subtitle}</p>
        </TitleWrapper>
    )

export default Titles
