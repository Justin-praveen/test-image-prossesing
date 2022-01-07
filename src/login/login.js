import React from 'react';
import { useState } from 'react';
import {useForm} from "react-hook-form";
import {signInWithEmailAndPassword } from "firebase/auth";
import db, {auth} from "../Db/firebase";
import {doc, getDoc } from "firebase/firestore";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom"


const Login = () => {
    
    const {register,handleSubmit} = useForm()

    const [Users,setusers] = useState(null);


    
    const send = useDispatch();


        if(Users != null){
            
            console.log(Users)
            
        }
        else{
            console.log("data not yet")
            
            
        }
      
    

    return (
        <>

        <div>
        <div class="progress">
      <div class="indeterminate"></div>
  </div>
            <div className='container'>
                <form onSubmit={handleSubmit(async(data)=>{
                    
                    signInWithEmailAndPassword(auth, data.Email, data.pass)
                      .then(async(userCredential) => {

                        const user = userCredential.user;
                        console.log(user)
                        console.log("signined")
                        const fdbdata = await getDoc(doc(db,"user",`${data.Email}`))
                        setusers(fdbdata.data())
                        send({
                            type : "auth",
                            user : [fdbdata.data()]
                        })

                        sessionStorage.setItem("value" , fdbdata.data().admin)
                        console.log(fdbdata.data())
                      })
                      .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;

                        console.log(`${errorCode && errorMessage}`)
                        alert(`${errorCode && errorMessage}`)
                        
                      });

                    let ju = document.getElementById("email");
                    let ji = document.getElementById("pass");
                    ju.value = ""
                    ji.value = ""

                })}>
    

                    <div className='row'>
                
                        <div >
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
                            
                            <p>Dont have a account <Link to={"/register"}>Register</Link></p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        
        </>
    )
}

export default Login
