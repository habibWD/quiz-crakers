import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Course.css'
import { Link } from 'react-router-dom';


const Course = ({ course }) => {
    const { id, logo, name } = course;
    return (
        <div className=''>
            <div className="img-container">
                <img src={logo} alt="" />
            </div>
            <div className="course-details">
                <h4>{name}</h4>
                <div className="btn-area">
                    <Link to={`/quiz/${id}`}>
                        <button className='btn'>
                            <p>Start Practice</p>
                            <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} />
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Course;