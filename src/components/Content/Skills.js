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

const pythonGroup = {
    name: "python",
    logo: pythonImg,
    listOfSingleSkillObject: [
        {skillName: "Django", logoImg: djangoImg},
        {skillName: "RESTapi", logoImg: apiImg},
        {skillName: "Qtdesigner", logoImg: qtDis},
        {skillName: "Selenium", logoImg: selenium},
        {skillName: "BS4", logoImg: bs},
        {skillName: "matplotlib", logoImg: mpl},
        // {skillName: "Tkinter"},
        // {skillName: "Qtdesigner"},
        // {skillName: "Qtdesigner"},
    ]

}

export default function Skills({skillsId , logo}) {

    
  return (
    <section id={skillsId} className='h-full'>
        <div className='container  mx-auto h-full'>
            <GroupTitle title={"Skills"}/>
            <SkillWindow skillObject={pythonGroup}/>
            {/* <SkillWindow skillObject={{}}/>
            <SkillWindow skillObject={{}}/> */}
        </div>
        
    </section>
  )
}
