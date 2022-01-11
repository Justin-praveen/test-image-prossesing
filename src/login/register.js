import React from 'react';
import { useState } from 'react';
import {useForm} from "react-hook-form";
import { doc, setDoc } from "firebase/firestore";
import db from '../Db/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Link} from "react-router-dom";
import Tilt from 'react-parallax-tilt';
import Particles from "react-tsparticles";



const Register = () => {
    
    const {register,handleSubmit} = useForm()

    const [Rusers,setusers] = useState(null)


    const particlesInit = (main) => {
        console.log(main);
    
        
      };

      const particlesLoaded = (container) => {
        console.log(container);
      };
    
   


        if(Rusers != null){
            console.log(Rusers)
        }
        else{
            console.log("data not yet")
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


        <div className="container uy flex">
            <div className='full'>

                <Tilt>
                    <div className='card ju'>
                    <div className='row'>
                    <div className='col s8 offset-s5 po '> <i class="large material-icons" >account_circle</i></div>
                </div>  
                <form className='f' onSubmit={handleSubmit(async(data)=>{
                    setusers({
                        uname : data.Uname,
                        email : data.Email,
                        pass : data.pass,
                        admin : false
                    })

                    await setDoc(doc(db,"user",`${data.Email}`),
                    {
                        uname : data.Uname,
                        email : data.Email,
                        pass : data.pass,
                        admin : false

                    }
                    )
                    const auth = getAuth();
                   createUserWithEmailAndPassword(auth, data.Email,data.pass)
                .then((userCredential) => {
 
               const user = userCredential.user;
                  console.log(user.uid)

                  window.M.toast({html: 'Sucessfuly...!', completeCallback: function(){alert('sucessfuly...!')}})

              })
                      .catch((error) => {
                        const errorCode = error.code;
                          const errorMessage = error.message;
                        console.log(
                                 `${errorCode && errorMessage}`
                                 )
 
  });


                    let ju = document.getElementById("email");
                    let ji = document.getElementById("pass");
                    let jo = document.getElementById("Uname");
                    ju.value = ""
                    ji.value = ""
                    jo.value = ""

                })}>
                    <div className='row'>
                        <div >
                        <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="Uname" type="text" className="validate" {...register("Uname", { required: true })} />  
                        <label htmlFor="Uname">Uname</label>
                            </div>
                            <div className='input-field col s8  offset-s2'>
                            
                            <input id="email" type="text" className="validate" {...register("Email", { required: true })} />  
                        <label htmlFor="email">Email</label>
                            </div>
                            
                            <div className='input-field col s8  offset-s2'>
                            <input id="pass" type="password" className="validate"{...register("pass", { required: true })} />
                            <label htmlFor="pass">Password</label>
                        </div>
                            
            
                            
                        <div className='row'>
                            <div className='col s4 offset-s5'>
                                 <button className='btn center ff' type='submit' >
                                Signup
                            </button>
                            </div>
                           
                        </div>
                            
                            <div className='row'>
                                <div className='col s8 offset-s4'>
 <p>Already have a account <Link to={"/"}>Login</Link></p>
                                </div>
                            </div>
                        
                           
                        </div>
                    </div>
                </form>

                    </div>
                </Tilt>
              
            </div>
        </div>
        
        </>
    )
}

export default Register
