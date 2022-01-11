import React, { useState,useEffect } from 'react';
import Tilt from 'react-parallax-tilt';
import Particles from "react-tsparticles";


const Result = ({stages,answer,data,setanswer,setqno}) => {

    const [correctans,setcorrectans] = useState(0);

    const io = ()=>{
        setanswer([])
        setqno(0)
        stages(1)
      }

      const particlesInit = (main) => {
        console.log(main);
    
        
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
    
    

    useEffect(() => {
var correct = 0
       answer.map((datas,i)=>{
           if(datas.a === data[i].answer){
               correct++
           }
        })
        setcorrectans(correct)
    }, [])

 
    

    return (

        <>
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

  
 <div className='lll'>
     <div className='container bg-blackse'>
         <div className='ff-gg'>
             <Tilt>
                 <div className='card ff-ii center-align'>
    <i className=' medium material-icons'>done_all</i>

    <div className='card-content'>
<h1>RESULT</h1>
<h1>{correctans} of {data.length}</h1>
 <p>{Math.floor((correctans / data.length) * 100)}%</p>
    </div>
    <div className='card-action jy'>
        
            
<a className='btn jj-ui' onClick={io}>Try Again</a>
          
            
<a className='btn jj-uii'  onClick={()=>stages(3)}>Answer</a>



            
        
        

    </div>
         
            
           
            


            
     </div>
             </Tilt>

         </div>
  

     </div>

   
            
            
        </div>

        </>
       
    )
}

export default Result
