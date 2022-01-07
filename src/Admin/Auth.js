import React, { useState } from 'react'
import { Admin } from './admin';

import {useForm} from "react-hook-form";
import axios from 'axios';





const Auth = () => {

    const {register,handleSubmit} = useForm()

    const code = "Admin"

    const [ui,setui] = useState(false)

const ji = ()=>{
   setui(true)

    console.log(
        "its comes"
    )
    
}

if(ui === true){
    console.log(ui)
}

    return (
        <>
        {
            !ui ? (<div>

                <h1>its verify page</h1>
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
                        alert("good buy Hacker!");

                    }
                })}>
                    <input {...register("codes",{required : true})}/>
                    <button >submit</button>
                </form>
                <a className='btn' onClick={ji}>click</a>
            </div>):(<Admin/>)
        }
        </>    
    )
}

export default Auth
