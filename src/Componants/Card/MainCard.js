import React from 'react'


import ScrollAnimation from 'react-animate-on-scroll'



function MainCard() {

    return (
        <div style={{backgroundColor : "rgba(149, 4, 191,100)",}}>

            <ScrollAnimation animateIn='animate__fadeInTopRight' animateOut='animate__fadeOutTopRight'>
                <h1 className="heading " style={{fontSize : "70px"}}>Education</h1> 
            </ScrollAnimation>

            <ScrollAnimation animateIn='animate__fadeInTopRight' animateOut='animate__fadeOutTopRight'>
                <p className="description "  style={{paddingTop:"0px"}}>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits. Educational methods include teaching, training, storytelling, discussion and directed research.</p>
            </ScrollAnimation>

            </div>

    )
}

export default MainCard
