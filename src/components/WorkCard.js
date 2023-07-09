import React from 'react'
import './WorkCard.css'
// import {NavLink} from 'react-router-dom';



const WorkCard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="" />
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                    <div className="pro-btn">
                        <a href={props.view} className="btn">View</a>
                        <a href={props.source} className="btn">Source</a>
                    </div>
                </div>
            </div>
  )
}

export default WorkCard