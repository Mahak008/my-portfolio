import React from 'react'

const Projects = ({ imgURL, title, desc }) => {
  return (
    <div>
      <div style={{background: `url(${imgURL})`, backgroundSize: "cover"}}
      className='h-52 md:h-72'>
        <div className='text-white'>
            <h5>{title}</h5>
            <p>{desc}</p>
        </div>
      </div>
      <h2>My Projects</h2>
    </div>
  )
}

export default Projects
