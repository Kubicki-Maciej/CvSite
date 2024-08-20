import React from 'react'
import SingleSkill from './SingleSkill'

export default function SkillWindow({skillObject}) {
  return (

    <div className='w-full mb-2 mt-2  '>
      {/* groupName */}
      <div className=' dark:border-white border-2 border-black rounded-lg  mb-4 ml-2 mr-2 h-full  '>
        <div className='flex items-center justify-center mb-4 mt-4'>
          <img className='h-[36px] mr-4' src={skillObject.logo} alt={skillObject.name}></img>
          <h2 className='text-3xl'>{skillObject.name} </h2>
        </div>
        <div className='grid grid-cols-2 items-center  justify-center'>
        {skillObject.listOfSingleSkillObject.map((skill, index) => (
        <div key={index} className="">
          <SingleSkill name={skill.skillName} logo={skill.logoImg} lvl={skill.level}/>
        </div>
      ))}
      </div>

        
      </div>
      
      
      {/* Icons loop */}
    </div>
  )
}
