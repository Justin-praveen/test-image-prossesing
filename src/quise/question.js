import React, { useState } from 'react';
import axios from 'axios';


const Question = () => {

    const [datas,setdata] = useState(null);

    if(datas == null){
        axios.get("http://localhost:7070/data").then((data)=>{
            
            setdata(data.data)

        console.log(data.data.data)
        console.log(datas)
    })


    }
    else{
        console.log("notyet data")
    }


    console.log(datas)

   
    return (
        <div>
            <h1>its question section</h1>
            
        </div>
    )
}

export default Question
