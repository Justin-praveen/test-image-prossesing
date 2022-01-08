import axios from 'axios';

import {useForm} from "react-hook-form"
import Adminpanel from '../modal/Adminpanel';




export const Admin = () => {

  const {register,handleSubmit} = useForm()

    return (
      <>
      <div>
            <div className='container'>
                <form onSubmit={handleSubmit(async(data)=>{

                  
                   

                   await axios.post("http://localhost:7070/add",{question:data.question,
                    choices:[data.choice1,data.choice2,data.choice3,data.choice4],
                    answer : data.answer
                  }).then((data)=>{
                    console.log(data)
                    alert("data added sucessfuly")
                  })

                    


                    let ju = document.getElementById("choice1");
                    let ji1 = document.getElementById("choice2");
                    let ji2 = document.getElementById("choice3");
                    let ji3 = document.getElementById("choice4");
                    let ji4 = document.getElementById("ans");
                    let jo = document.getElementById("question");
                    ju.value = ""
                    ji1.value = ""
                    ji2.value = ""
                    ji3.value = ""
                    ji4.value = ""
                    jo.value = ""


                })}>
                    <div className='row'>
                        <div >
                        <div className='input-field col s12'>
                            
                            <textarea id="question" type="text" className="validate" {...register("question", { required: true })} />  
                        <label htmlFor="question">Question</label>
                            </div>
                            <div className='input-field col s12'>
                            
                            <input id="choice1" type="text" className="validate" {...register("choice1", { required: true })} />  
                        <label htmlFor="choice1">choice1</label>
                            </div>
                            <div className='input-field col s12'>

                            <input id="choice2" type="text" className="validate" {...register("choice2", { required: true })} />  
                        <label htmlFor="choice2">choice2</label>
                            </div>
                            <div className='input-field col s12'>

                            <input id="choice3" type="text" className="validate" {...register("choice3", { required: true })} />  
                        <label htmlFor="choice3">choice3</label>
                            </div>
                            <div className='input-field col s12'>

                            <input id="choice4" type="text" className="validate" {...register("choice4", { required: true })} />  
                        <label htmlFor="choice4">choice4</label>
                            </div>
                            
                            <div className='input-field col s12'>
                            <input id="ans" type="text" className="validate"{...register("answer", { required: true })} />
                            <label htmlFor="ans">Answer</label>
                        </div>
                            
            
                            
                            <button className='btn' type='submit' >
                                Submit
                            </button>
                            
                        
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <Adminpanel/>
      </>

    )
}
