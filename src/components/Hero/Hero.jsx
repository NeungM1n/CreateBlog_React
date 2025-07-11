import React from 'react'
import './Hero.css'

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings hero-container flexCenter hero-container">

                {/* left side*/}
                <div className="hero-left">
                    <div className="hero-title">
                        <h1>
                            Discover <br />
                            Most Suitable <br />
                            Property
                        </h1>
                    </div>
                </div>

                {/* right side*/}

                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src="./hero-image.png" alt="" className="" />
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Hero
