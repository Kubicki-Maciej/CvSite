import React from 'react'
import SingleSkill from './SingleSkill'

export default function SkillWindow({skillObject}) {
  return (

    <div>
      {/* groupName */}
      <div className=' grid grid-cols-2'>
        <div>
          <img className='h-[36px] mr-4' src={skillObject.logo} alt={skillObject.name}></img>
          <h2 className='text-3xl mb-6 uppercase'>{skillObject.name} </h2>
        </div>
        
        <div className=' grid grid-cols-2'>        
          {skillObject.listOfSingleSkillObject.map((skill, index) => (
        
            <p>{skill.skillName},</p>
            ))}
        </div>

        
      </div>
      <div className='grid grid-cols-4'>
        {skillObject.listOfSingleSkillObject.map((skill, index) => (
        <div key={index} className="text-xl text-gray-700">
          <SingleSkill name={skill.skillName} logo={skill.logoImg}/>
        </div>
      ))}
      </div>
      
      {/* Icons loop */}
    </div>
  )
}
