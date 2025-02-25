import React from 'react'
import { useEffect, useState } from 'react'
import ControlledCarousel from './Gallery'
import ProjectContent from './ProjectContent';
import SingleButton from '../Core/Button'
import SocialBtn from '../StartPage/SocialBtn';

import WebIcon from '../Images/webicon.png'
import GitHubLogoIcon from '../Images/Socials/github.png'

export default function ProjectWindow({index, projectObject}) {
    const [currentIndexImage, setCurrentIndexImage] = useState(0)    

    function selectIndex(index){
        setCurrentIndexImage(index)
    }
        
  return (
    <div className='mb-4 mt-2'>
    <div className='grid grid-cols-1 border-2 dark:border-border-dark  border-border-light rounded-lg lg:p-12 md:p-2 xl:p-4 mb-4 ml-2 mr-2 h-full   '>
        <div>
            <ControlledCarousel currentIndex={currentIndexImage} setIndex={selectIndex} listOfObjects={projectObject.imagesAndTextObjects}/>
        </div>

        <div className='flex flex-row justify-center align-middle '>
            <ProjectContent title={projectObject.name} object={projectObject.imagesAndTextObjects[currentIndexImage]} technologyUsed={projectObject.technologyUsed}/>
        </div>
        <div className='flex flex-row justify-center'>
            { projectObject.boolLinktToProject ? ( <SocialBtn objectIcon={WebIcon} adres={projectObject.url} small={true}/>) : ""}
            { projectObject.boolGithub ? ( <SocialBtn objectIcon={GitHubLogoIcon} adres={projectObject.urlGitHub} small={true}/>) : ""}
        </div>
    </div>
    </div>
  )
}
