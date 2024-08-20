import React from 'react'
import SkillWindow from './SkillWindow'
import GroupTitle from '../Core/GroupTitle'

import pythonImg from '../Images/Logo/Python/Python.png'
import djangoImg from '../Images/Logo/Python/django.png'
import apiImg from '../Images/Logo/Python/Api.png'
import qtDis from '../Images/Logo/Python/qtDis.png'
import selenium from '../Images/Logo/Python/Selenium.png'
import bs from '../Images/Logo/Python/BS.png'
import mpl from '../Images/Logo/Python/matplotlib.png'

import jsImg from '../Images/Logo/js.png'
import jsVanilaImg from '../Images/Logo/jsShield.png'
import twImg from '../Images/Logo/JavaScript/tailwind.png'
import reactImg from '../Images/Logo/JavaScript/react.png'

import skillImg from '../Images/Logo/OtherSkills/skill.png'
import poland from '../Images/Logo/OtherSkills/poland.png'
import british from '../Images/Logo/OtherSkills/british.png'

const pythonGroup = {
    name: "Python",
    logo: pythonImg,
    listOfSingleSkillObject: [
        {skillName: "Django", logoImg: djangoImg},
        {skillName: "RESTapi", logoImg: apiImg},
        {skillName: "Qtdesigner", logoImg: qtDis},
        {skillName: "Selenium", logoImg: selenium},
        {skillName: "Beautfulsoup", logoImg: bs},
        {skillName: "Matplotlib", logoImg: mpl},
    ]
}

const javaScriptGroup = {
    name: "JavaScript",
    logo: jsImg,
    listOfSingleSkillObject: [
        {skillName: "React", logoImg: reactImg},
        {skillName: "TailwindCSS", logoImg: twImg},
        {skillName: "Vanilla JS", logoImg: jsVanilaImg},
    ]
}

const otherSkills = {
    name: "Other",
    logo: skillImg,
    listOfSingleSkillObject: [
        {skillName: "Polish", logoImg: poland, level: "National"},
        {skillName: "English", logoImg: british, level: "B2"},
    ]
}


export default function Skills({skillsId , logo}) {

    
  return (
    <section id={skillsId} className='h-full'>
        <div className='container mx-auto h-full'>
            <GroupTitle title={"Skills"}/>
            <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-items-center '>
                <SkillWindow skillObject={pythonGroup}/>
                <SkillWindow skillObject={javaScriptGroup}/>
                <SkillWindow skillObject={otherSkills}/>
            </div>
        </div>        
    </section>
  )
}
