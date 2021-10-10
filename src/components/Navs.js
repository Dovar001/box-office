import React from 'react'
import { useLocation } from 'react-router'
import { LinkStyled, NavList } from './Navs.styled'

const Navs = () => {

    const location = useLocation()

    const LINKS = [
        {
            to:'/',text:'Home'
        },
        {
            to:'/starred',text:'Starred'
        }
    ]
   
    return (
        <div>
            <NavList>
                {LINKS.map( item => 
                <li key={item.text}> <LinkStyled to={item.to} className={item.to === location.pathname? 'active' : ''} > {item.text}</LinkStyled></li>      
                )}
            </NavList>
        </div>
    )
    }

export default Navs
