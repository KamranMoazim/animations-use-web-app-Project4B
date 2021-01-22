import React from 'react'
import useWebAnimations from "@wellyshen/use-web-animations";
// import image from '../../images/5 SCENE.svg'
import ScrollAnimation from 'react-animate-on-scroll';

function Card5() {


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

                <h1 className="heading animate__animated animate__fadeInLeftBig">Self-directed learning</h1>
</ScrollAnimation>
<ScrollAnimation animateIn='animate__jackInTheBox' animateOut='animate__zoomOut'>

                <p className="description animate__animated animate__slideInDown">Autodidacticism (also autodidactism) is self-directed learning. One may become an autodidact at nearly any point in one's life. Notable autodidacts include Abraham Lincoln (U.S. president), Srinivasa Ramanujan (mathematician), Michael Faraday (chemist and physicist), Charles Darwin (naturalist), Thomas Alva Edison (inventor), Tadao Ando (architect), George Bernard Shaw (playwright), Frank Zappa (composer, recording engineer, film director), and Leonardo da Vinci (engineer, scientist, mathematician).</p>
</ScrollAnimation>
            </div>

            <div className="leftDiv">
                <div ref={ref}>
                    <img src='../../images/5 SCENE.svg' alt="" />
                </div>
            </div>


        </div>
    )
}

export default Card5
