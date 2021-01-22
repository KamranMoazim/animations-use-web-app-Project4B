import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
// import image from '../../images/6 SCENE.svg'

import ScrollAnimation from 'react-animate-on-scroll';
function Card6() {


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
                <div ref={ref}>
                    <img src='../../images/6 SCENE.svg' alt="" />
                </div>
            </div>

            <div className="rightDiv">
            <ScrollAnimation animateIn='animate__fadeInTopRight' animateOut='animate__fadeOutTopRight'>

                <h1 className="heading animate__animated animate__fadeInRightBig">Public schooling</h1>
</ScrollAnimation>
<ScrollAnimation animateIn='animate__jackInTheBox' animateOut='animate__zoomOut'>

                <p className="description animate__animated animate__slideInDown">The education sector or education system is a group of institutions (ministries of education, local educational authorities, teacher training institutions, schools, universities, etc.) whose primary purpose is to provide education to children and young people in educational settings. It involves a wide range of people (curriculum developers, inspectors, school principals, teachers, school nurses, students, etc.). These institutions can vary according to different contexts</p>
</ScrollAnimation>
            </div>

        </div>
    )
}

export default Card6
