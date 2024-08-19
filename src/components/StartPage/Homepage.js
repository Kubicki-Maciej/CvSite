import React from 'react'
import Profile from './Profile'
import PanelCv from './PanelCv'
import StartPageInfo from './StartPageInfo'

export default function Homepage() {
  return (
    <div className={'container mx-auto flex flex-col justify-between items-center'}>
        <div className={'container mx-auto flex flex-row justify-between items-center'}>
            <Profile/>
            <PanelCv/>
        </div>
        <div>
            <StartPageInfo/>
        </div>
    </div>
  )
}
