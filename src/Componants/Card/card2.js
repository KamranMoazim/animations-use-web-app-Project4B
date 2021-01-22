import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import image from '../../images/2 SCENE.svg'
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
                <div ref={ref}>
                    <img src={image} alt="image" />
                </div>
            </div>

            <div className="rightDiv ">
            <ScrollAnimation animateIn='animate__fadeInTopRight' animateOut='animate__fadeOutTopRight'>

                <h1 className="heading animate__animated animate__fadeInRightBig">Early childhood Education</h1>
</ScrollAnimation>
<ScrollAnimation animateIn='animate__jackInTheBox' animateOut='animate__zoomOut'>

                <p className="description animate__animated animate__slideInDown">Education designed to support early development in preparation for participation in school and society. The programmes are designed for children below the age of 3</p>
</ScrollAnimation>
            </div>

        </div>
    )
}

export default Card2
