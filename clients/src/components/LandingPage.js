import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom';
import '../App.css'

function LandingPage() {


    const [userName, setUserName] = useState();
    let navigate = useNavigate()

    const onHandleEvent = (event) => {
        setUserName(event.target.value)
    }

    const onSubmit =() =>{
        localStorage.setItem('username', userName);
        navigate('/dashboard')
    }

  return (
    <div className='bg'>

        <h1><i><b>FEYNMAN BOARD</b></i></h1>

        <input
         type= 'text'
         placeholder='Enter your name...'
         name='user_name'
         onChange={(e) => onHandleEvent(e)} />


        <button className='landingButton' onClick={() => onSubmit()}><b><i>ENTER</i></b></button>

    </div>
  )
}

export default LandingPage