import React from 'react'
import SocialBtn from './SocialBtn'

import LinkedInLogoIcon from '../Images/Socials/linkedin.png'
import GitHubLogoIcon from '../Images/Socials/github.png'


export default function Socials() {
  return (
    <div className='flex flex-col'>
        <div className='flex flex-row text-center content-between place-content-around max-w-[500px] mb-3'>
            <SocialBtn objectIcon={GitHubLogoIcon}/>
            <SocialBtn objectIcon={LinkedInLogoIcon}/>
            {/* <LinkedInLogoIcon style={{height:"100px", width:"100px"}}/> */}
        </div>
        <div className='mb-9'>
            <button className="hover:bg-tahiti  font-bold py-2 px-4 rounded-full transition">Download CV</button>
        </div>
    </div>
  )
}