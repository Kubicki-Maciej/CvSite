import React from 'react'
import Profile from './Profile'
import PanelCv from './PanelCv'
import StartPageInfo from './StartPageInfo'

export default function Homepage({}) {
  return (
    <section className='h-full pt-40'>
        <div className='container  mx-auto h-full'>
            {/* <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-16 '> */}
            <div className='grid grid-cols-1 lg:grid-cols-2 xl:pt-8 xl:pb-16 place-items-center '>
                {/* <Profile text={"If you can dream it, you can do it."} author={" – Walt Disney –"}/> */}
                <Profile text={"Patience, persistence and perspiration make an unbeatable combination for success."} author={" – Napoleon Hill –"}/>
                <div className='order-2  mb-8 xl:mb-0'>
                    <PanelCv/>
                </div>
            </div>
            <div>
                <StartPageInfo/>
            </div>
        </div>
    </section>
  )
}
