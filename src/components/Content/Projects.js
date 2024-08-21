import React from 'react'
import GroupTitle from '../Core/GroupTitle'
import ProjectWindow from './ProjectWindow'


export default function Projects({projectId, projectList}) {
  return (
    <section id={projectId} className='h-full'>
        <div className='container mx-auto h-full'>
            <GroupTitle title={"Projects"}/>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 '>
              {projectList.map((project, index)=>(
                <ProjectWindow index={index} projectObject={project}/>
              )
              )}
            </div>
        </div>        
    </section>
  )
}
