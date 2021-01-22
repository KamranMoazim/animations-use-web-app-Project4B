import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import image from '../../images/8 SCENE.svg'

import ScrollAnimation from 'react-animate-on-scroll';

function Card8() {


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

            <div className="rightDiv">
            <ScrollAnimation animateIn='animate__fadeInTopRight' animateOut='animate__fadeOutTopRight'>

                <h1 className="heading animate__animated animate__fadeInRightBig">Internationalisation</h1>
</ScrollAnimation>
<ScrollAnimation animateIn='animate__jackInTheBox' animateOut='animate__zoomOut'>

                <p className="description animate__animated animate__slideInDown">Nearly every country now has universal primary education.

Similarities – in systems or even in ideas – that schools share internationally have led to an increase in international student exchanges. The European Socrates-Erasmus Programme[49] facilitates exchanges across European universities. The Soros Foundation[50] provides many opportunities for students from central Asia and eastern Europe. Programs such as the International Baccalaureate have contributed to the internationalization of education. The global campus online, led by American universities, allows free access to class materials and lecture files recorded during the actual classes.</p>
</ScrollAnimation>
            </div>

        </div>
    )
}

export default Card8
