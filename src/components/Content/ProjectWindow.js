import React from 'react'
import { useEffect, useState } from 'react'
import ControlledCarousel from './Gallery'
import ProjectContent from './ProjectContent';

export default function ProjectWindow({index, projectObject}) {
    const [currentIndexImage, setCurrentIndexImage] = useState(1)    

    function selectIndex(index){
        console.log(index);
        setCurrentIndexImage(index)
    }
        
  return (
    <div className='mb-4 mt-2'>
    <div className='grid grid-cols-1 border-2 dark:border-border-dark  border-border-light rounded-lg lg:p-12 md:p-2 xl:p-4 mb-4 ml-2 mr-2 h-full   '>
        <div>
            <ControlledCarousel currentIndex={currentIndexImage} setIndex={selectIndex}/>
        </div>
        <div className='flex flex-row justify-center align-middle '>
            <ProjectContent/>
        </div>
    </div>
    </div>
  )
}
