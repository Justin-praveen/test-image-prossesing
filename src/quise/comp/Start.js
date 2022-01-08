import React from 'react';
import Loginmodal from '../../modal/Loginmodal';





const Start = ({stages}) => {

    return (
        <>
        <Loginmodal/>
        <h1>its start</h1>
       
        <button className='btn' onClick={()=>stages(1)}>click</button>
        
        
        
        
        </>
    )
}

export default Start
