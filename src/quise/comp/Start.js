import React from 'react';
import Loginmodal from '../../modal/Loginmodal';
import Tilt from 'react-parallax-tilt';
import Particles from "react-tsparticles";


const particlesInit = (main) => {
    console.log(main);

    
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };



const Start = ({stages}) => {

    return (
        <>
        <Loginmodal/>
        
<Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#0e0e0f",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 20,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#fafbfc",
          },
          links: {
            color: "#269dff",
            distance: 150,
            enable: true,
            opacity: 0.7,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />


        <div className='container'>
            <div className='row'>

<div className='whole col s12' >
    <Tilt><div className='card  sixer center-align'>
                <i className='large material-icons'>play_circle_outline</i>
<h1>Quiz Game</h1>
<button className='btn' onClick={()=>stages(1)}>START</button>
                </div>
                </Tilt> 
            </div>
            </div>
           
        </div>
        
                
       
        

        </>
    )
}

export default Start
