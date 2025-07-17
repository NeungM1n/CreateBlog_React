import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Get Started with Homyz</span>
                <span className='secondaryText'>Subscribe and 좋아요</span>
                <span>
                    <button className="button">
                        <a href='mailto:nick3412@hufs.ac.kr'>Get Started</a>
                    </button>
                </span>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
