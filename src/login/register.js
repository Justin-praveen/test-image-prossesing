import React from 'react';
import { useState } from 'react';
import {useForm} from "react-hook-form";
import { doc, setDoc } from "firebase/firestore";
import db from '../Db/firebase';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {Link} from "react-router-dom"


const Register = () => {
    
    const {register,handleSubmit} = useForm()

    const [Rusers,setusers] = useState(null)
   


        if(Rusers != null){
            console.log(Rusers)
        }
        else{
            console.log("data not yet")
        }
      
    

    return (
        <>

        <div>
            <div className='container'>
                <form onSubmit={handleSubmit(async(data)=>{
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
                        <div className='input-field col s12'>
                            
                            <input id="Uname" type="text" className="validate" {...register("Uname", { required: true })} />  
                        <label htmlFor="Uname">Uname</label>
                            </div>
                            <div className='input-field col s12'>
                            
                            <input id="email" type="text" className="validate" {...register("Email", { required: true })} />  
                        <label htmlFor="email">Email</label>
                            </div>
                            
                            <div className='input-field col s12'>
                            <input id="pass" type="password" className="validate"{...register("pass", { required: true })} />
                            <label htmlFor="pass">Password</label>
                        </div>
                            
            
                            
                            <button className='btn' type='submit' >
                                login
                            </button>
                            
                        
                            <p>Already have a account <Link to={"/"}>Login</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
        </>
    )
}

export default Register
