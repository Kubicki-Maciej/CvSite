import React from 'react'
import SingleSkill from './SingleSkill'

export default function SkillWindow({skillObject}) {
  return (
    <div>
      {/* groupName */}
      <div>
        <h2 className='text-3xl mb-6 uppercase'>{skillObject.name} </h2>
        <img className='w-40' src={skillObject.logo} alt={skillObject.name}></img>
      </div>
      

      <div className='grid xl:grid-cols-8 grid-cols-6'>
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
