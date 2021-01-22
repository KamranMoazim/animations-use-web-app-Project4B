import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import image from '../../images/1 SCENE.svg'
import ScrollAnimation from 'react-animate-on-scroll';

function Card2() {


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

            <div className="leftDiv">
            <ScrollAnimation animateIn='animate__fadeInTopRight' animateOut='animate__fadeOutTopRight'>

                <h1 className="heading animate__animated animate__fadeInLeftBig">Formal Education</h1>
            </ScrollAnimation>

            <ScrollAnimation animateIn='animate__jackInTheBox' animateOut='animate__zoomOut'>

                <p className="description animate__animated animate__slideInDown">Formal education occurs in a structured environment whose explicit purpose is teaching students. Usually, formal education takes place in a school environment with classrooms of multiple students learning together with a trained, certified teacher of the subject.</p>
            </ScrollAnimation>
            </div>
            <div className="rightDiv animate__animated ">
                <div ref={ref}>
                    <img src={image} alt="image" />
                </div>
            </div>


        </div>
    )
}

export default Card2
