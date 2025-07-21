import React from 'react'
import './GetStarted.css'

const GetStarted = () => {
  return (
    <section id="contact" className="g-wrapper">
        <div className="paddings innerWidth g-container">
            <div className="flexColCenter inner-container">
                <span className='primaryText'>Contact</span>
                <span className='secondaryText'>Press Button if you contact with me</span>
                <span className='buttonGroup'>
                    <button className="button">
                        <a href='https://github.com/NeungM1n' target="_blank" rel="noopener noreferrer">Github</a>
                    </button>

                    <button className="button">
                        <a href='mailto:nick3412@hufs.ac.kr'>Mail</a>
                    </button>
                </span>
            </div>
        </div>
    </section>
  )
}

export default GetStarted
