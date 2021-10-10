import React from 'react'
import ActorCard from './ActorCard'
import { FlexGrid } from '../styled'
import NOT_FOUND_IMG from '../../images/not-found.png'

const ActorGrid = ({data}) => (
        <FlexGrid>
           {
           data.map(({person}) => <ActorCard key={person.id} 
                                             image={person.image? person.image.medium : NOT_FOUND_IMG }
                                             name={person.name}
                                             gender={person.gender}
                                             country={person.country ? person.country.name: null}
                                             birthday={person.birthday}
                                             deathday={person.deathday}
                                             />)
           } 
        </FlexGrid>
    )

export default ActorGrid
