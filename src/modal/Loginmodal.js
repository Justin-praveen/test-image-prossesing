import React, { useState } from 'react';
import {Modal} from "react-responsive-modal";
import 'react-responsive-modal/styles.css';

const Loginmodal = () => {
    const [open, setOpen] = useState(true);

    const hu = () => setOpen(false);

    return (
       <>

<div>
     
      <Modal open={open} onClose={hu} center>
      <h4>SUCCESSFULY....</h4>
        
      </Modal>
    </div>
       
       </>
    )
}

export default Loginmodal
