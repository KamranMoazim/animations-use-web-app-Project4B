import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
// import image from '../../images/3 SCENE.svg'



import ScrollAnimation from 'react-animate-on-scroll'

function Card3() {


    const { ref } = useWebAnimations({
        keyframes: [{ transform: "translate(0px,20px )" }],
        timing: {
          duration: 2000,
          iterations: Infinity,
          direction: "alternate",
          easing: "ease-in-out",
        },
      });

    return (
        <div style={{display:"flex"}}>

            <div className="rightDiv">
            <ScrollAnimation animateIn='animate__fadeInTopRight' animateOut='animate__fadeOutTopRight'>
                
                <h1 className="heading animate__animated animate__fadeInLeftBig">Primary Education</h1>
                </ScrollAnimation>
                <ScrollAnimation animateIn='animate__jackInTheBox' animateOut='animate__zoomOut'>

                <p className="description animate__animated animate__slideInDown">This is ISCED level 1.[16] Primary (or elementary) education consists of the first four to seven years of formal, structured education. In general, primary education consists of six to eight years of schooling starting at the age of five to seven, although this varies between, and sometimes within, countries. Globally</p>
</ScrollAnimation>
            </div>

            <div className="leftDiv">
                <div ref={ref}>
                    <img src='../../images/3 SCENE.svg' alt="" />
                </div>
            </div>


        </div>
    )
}

export default Card3
