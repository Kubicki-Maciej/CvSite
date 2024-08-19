import React from 'react'
import Profile from './Profile'
import PanelCv from './PanelCv'
import StartPageInfo from './StartPageInfo'

export default function Homepage() {
  return (
    <section className='h-full'>
        <div className='container  mx-auto h-full'>
            <div className='flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 '>
                <div className='text-center xl:text-left odrer-2 xl:order-none'>
                    <span className='text-xl'>Software Developer</span>
                    
                    <h1 className='text-5xl mb-6'>
                        Hello I am <br /> <span className='text-tahiti-dark dark:text-tahiti'>Dev.Kubicki</span>
                    </h1>
                    <p className='max-w-[500px] mb-9 text/80'>
                        loreipsum loreipsum loreipsum loreipsum loreipsum loreipsum loreipsum loreipsum loreipsum loreipsum loreipsum loreipsum loreipsum loreipsum loreipsum
                    </p>
                    <div>
                        Socials button
                    </div>
                </div>
                <div className='order-1 xl:order-none mb-8 xl:mb-0'>
                    {/* <PanelCv/> */}
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
