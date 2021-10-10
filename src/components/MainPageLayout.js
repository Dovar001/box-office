import React from 'react'
import Navs from './Navs'
import Titles from './Titles'

const MainPageLayout = ({children}) => (
        <div>
            <Navs />
            <Titles 
     title='Box office' 
     subtitle='Are you loking for movie or actor' />
            {children}
        </div>
    )

export default MainPageLayout
