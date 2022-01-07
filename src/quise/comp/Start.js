import React from 'react';


const Start = ({stages}) => {

    return (
        <>
        <h1>its start</h1>
        <button className='btn' onClick={()=>stages(1)}>click</button>
        </>
    )
}

export default Start
