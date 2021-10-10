import React from 'react'
import ShowCard from './ShowCard'
import { FlexGrid } from '../styled'
import NOT_FOUND_IMG from '../../images/not-found.png'
import { useShows } from '../../misc/custom-hooks'

const ShowGrid = ({data}) => {
 

    const [starredShows,dispatchStarred] = useShows()
    return (
        <FlexGrid>
        {
        // eslint-disable-next-line arrow-body-style
        data.map(({show}) => {

            const isStarred = starredShows.includes(show.id)

            const onClickStar = () => {
              if(isStarred){
                   dispatchStarred({type:'REMOVE', showId:show.id}) 
              } else {
                
                  dispatchStarred({type:'ADD',showId:show.id})
              }
            }


        return(
        <ShowCard key={show.id} 
                                       id={show.id} 
                                       name={show.name}
                                       image={show.image ? show.image.medium : NOT_FOUND_IMG }
                                       summary={show.summary}
                                       onClickStar={onClickStar}
                                       isStarred={isStarred}
                                       /> )}
        )
   }
     </FlexGrid>
    )
}

export default ShowGrid
