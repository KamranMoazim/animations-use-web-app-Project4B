import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
import image from '../../images/4 SCENE.svg'
import ScrollAnimation from 'react-animate-on-scroll';
function Card4() {


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

                <h1 className="heading animate__animated animate__fadeInRightBig">Secondary Education</h1>
</ScrollAnimation>
<ScrollAnimation animateIn='animate__jackInTheBox' animateOut='animate__zoomOut'>

                <p className="description animate__animated animate__slideInDown">Secondary education in the United States did not emerge until 1910, with the rise of large corporations and advancing technology in factories, which required skilled workers. In order to meet this new job demand, high schools were created, with a curriculum focused on practical job skills that would better prepare students for white collar or skilled blue collar work. </p>
</ScrollAnimation>
            </div>

        </div>
    )
}

export default Card4
