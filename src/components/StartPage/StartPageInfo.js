import React from 'react'
import SingleInfo from './SingleInfo'

// Team Collaboration
// In my work, I thrive in collaborative environments, where communication and teamwork are key. I actively contribute to group discussions, share knowledge, and provide support to my colleagues. My ability to listen and understand different perspectives allows me to integrate diverse ideas, leading to innovative solutions that benefit the entire team.

// Problem-Solving
// I excel at identifying and solving complex problems, especially in high-pressure situations. My analytical mindset helps me break down issues into manageable parts, and my attention to detail ensures that I address every aspect of a problem. I’m committed to finding efficient and effective solutions, no matter how challenging the task.

// Adaptability and Continuous Learning
// The ever-evolving nature of the IT industry demands adaptability, and I am always eager to learn and grow. I stay up-to-date with the latest technologies and methodologies, and I am quick to adapt to new tools and frameworks. This mindset enables me to continuously improve my skills and contribute to projects with the most relevant and modern approaches.

// Technical Expertise
// My strong foundation in programming and IT gives me the technical expertise required to deliver high-quality solutions. I am proficient in multiple programming languages and have a deep understanding of software development processes. This technical knowledge, combined with my passion for technology, drives me to build robust and scalable systems.
export default function StartPageInfo() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-3 text-xl place-items-center'>
      <SingleInfo 
        title={"Problem-Solving"}
        paragraph={"My analytical mindset helps me break down issues into manageable parts, and my attention to detail ensures that I address every aspect of a problem."}
      />
      <SingleInfo 
        title={"Team Collaboration"} 
        paragraph={"I actively contribute to group discussions, share knowledge, and provide support to my colleagues. My ability to listen and understand different perspectives"}
      />
      <SingleInfo 
        title={"Adaptability and Continuous Learning"}
        paragraph={"I am always eager to learn and grow. I stay up-to-date with the latest technologies and methodologies, and I am quick to adapt to new tools and frameworks."}
      />
    </div>
  )
}
