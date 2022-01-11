import React, { useState } from 'react'
import { Admin } from './admin';

import {useForm} from "react-hook-form";
import axios from 'axios';
import Adminverify from '../modal/Adminverify';
import Tilt from 'react-parallax-tilt';
import Particles from "react-tsparticles";





const Auth = () => {

    const {register,handleSubmit} = useForm()

    const code = "Admin"

    const [ui,setui] = useState(false)

    const particlesInit = (main) => {
        console.log(main);
    
        
      };

      const particlesLoaded = (container) => {
        console.log(container);
      };
    



if(ui === true){
    console.log(ui)
}

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

        <div className='full-body-verify'>

        
        <div className='container verify-full'>
          <div className='auth-cont'>

               {
            !ui ? (<Tilt><div className='card verfy-auth center-align'>
                <div className='row'>
               
  <i class=" large material-icons">account_circle</i>
            

<h1 className='col s12'>Enter code..</h1>

                </div>
                <div className='row'>

                    
                    
           
                <form onSubmit={handleSubmit(async(data)=>{
                    if(code === data.codes){
                        console.log("correct")
                        alert("welcome!")
                        setui(true)
                    }else{
                        console.log(data.codes);
                        console.log(code)
                        console.log("your not a admin");
                        await axios.get("http://localhost:7070/auth",{name:"admin"}).then(dat => {
                            console.log(dat)


                    })
                        
                        setui(false);
                      window.M.toast({html: 'Wrong code', completeCallback: function(){alert('bye bye......!')}})
                        

                    }
                })}>
                     <div className='row'>
                     <div className='col s8 offset-s2'>
                    
<input {...register("codes",{required : true})}/>

                    </div>


                    </div>
                      

                    <button className='btn center-align bt-auth' type='submit' >Verify</button>

                   
                    
                </form>

                    </div>

     
              
                
            </div></Tilt>):(<Admin/>)
        } 
          </div>
          
          
        </div>
        
        <Adminverify/>
        </div>
        </>    
    )
}

export default Auth
