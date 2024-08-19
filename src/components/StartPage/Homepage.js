import React from 'react'
import Profile from './Profile'
import PanelCv from './PanelCv'
import StartPageInfo from './StartPageInfo'

export default function Homepage() {
  return (
    <section className='h-full'>
        <div className='container  mx-auto h-full'>
            <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 '>
                <Profile/>
                
                <div className='order-1 xl:order-none mb-8 xl:mb-0'>
                    <PanelCv/>
                </div>

                
            </div>
            <div>
            
                {/* <StartPageInfo/> */}
            </div>
        </div>
    </section>
  )
}
