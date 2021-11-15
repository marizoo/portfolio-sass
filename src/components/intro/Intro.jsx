import React, {useEffect, useRef} from 'react'
import './intro.scss'
import { init } from 'ityped'

const Intro = () => {

    const textRef = useRef();

    useEffect( () => {
        init(textRef.current, { 
            showCursor: false, 
            backDelay:  1500,
            backSpeed: 60,
            showCursor: true,
            strings: ['Developer', 'Designer', 'Content Creator' ] })
    }, [])

    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="./assets/man.png" alt="man photo" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi there, I'm</h2>
                    <h1>John Barrack</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="./assets/down.png" alt="down to the next page arrow" />
                </a>
            </div>
        </div>
    )
}

export default Intro
