import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
// import image from '../../images/7 SCENE.svg'

import ScrollAnimation from 'react-animate-on-scroll';
function Card7() {


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

                <h1 className="heading animate__animated animate__fadeInLeftBig">Development goals</h1>
</ScrollAnimation>
<ScrollAnimation animateIn='animate__jackInTheBox' animateOut='animate__zoomOut'>

                <p className="description animate__animated animate__slideInDown">Joseph Chimombo pointed out education's role as a policy instrument, capable of instilling social change and economic advancement in developing countries by giving communities the opportunity to take control of their destinies.[43] The 2030 Agenda for Sustainable Development, adopted by the United Nations (UN) General Assembly in September 2015, calls for a new vision to address the environmental, social and economic concerns facing the world today. The Agenda includes 17 Sustainable Development Goals (SDGs), including SDG 4 on education.</p>
</ScrollAnimation>
            </div>

            <div className="leftDiv">
                <div ref={ref}>
                    <img src='../../images/7 SCENE.svg' alt="" />
                </div>
            </div>


        </div>
    )
}

export default Card7
