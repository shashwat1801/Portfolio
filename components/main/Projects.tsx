import React from 'react'
import ProjectCard from '../sub/ProjectCard'

export const Projects = () => {
  return (
    <div className='flex flex-col items-center justify-center py-0.1 pb-40' id='projects'>
            <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-5 mb-10'>
                Projects
            </h1>
            <div className='h-full w-full flex flex-col md:flex-row gap-15 px-10'>
              <ProjectCard 
          src="/queue_manage.png"
          title="Token Management System"
          description="Queue management system consisting token generation algorithms."
        />
        <ProjectCard
          src="/Voicebot.png"
          title="Voice Assistant - Gabe"
          description="Developed a Python-based voice assistant automatingtasks like browsing and file handling"
        />
          <ProjectCard
          src="/SpaceWebsite.png"
          title="Portfolio Website"
          description="Intuitive portfolio built with Next.js, Tailwind CSS, and Framer Motion, transforming designs into a fast, optimized Website"
        />
        </div>

    </div>
  )
}

export default Projects;