import React from 'react';
import './Courses.css';
import ai from '../../assets/img/ai.png';        // Update path based on new location
import sd from '../../assets/img/sd.png';        // Update path based on new location
import dg from '../../assets/img/dg.png';        // Update path based on new location
import hacker from '../../assets/img/hacking.png'; // Update path based on new location

function Courses() {
    const courseData = [
        {
            title: "AI Development",
            desc: "Master AI",
            img: ai
        },
        {
            title: "Software Development",
            desc: "Master software coding",
            img: sd
        },
        {
            title: "Digital Marketing Development",
            desc: "Master digital marketing",
            img: dg
        },
        {
            title: "Cybersecurity",
            desc: "Master hacking",
            img: hacker
        }
    ];

    return (
        <div className='container course-container'>
            <div className='course-top'>
                <h2 className='section-title'>Our Free Courses</h2>
                <p>Free career-oriented classes available for students</p>
                <div className='course-wrapper'>
                    {courseData.map((course, index) => (
                        <div className='course-item' key={index}>
                            <span className='course-icon'>
                                <img src={course.img} alt={course.title} /> {/* Self-closing tag */}
                            </span>
                            <div className='course-content'>
                                <h4>{course.title}</h4>
                                <p>{course.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Courses;
