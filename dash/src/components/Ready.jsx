import React from 'react'
import handShake from '../assets/handshake.png'
import FormButton from './FormButton'

function Ready() {
  return (
    <div className='Ready'>
      <img src={handShake} alt="image of handshake" />
      <div className='ReadyText'>
        <h1>Ready to get your free ATM?</h1>
        <br />
        <p>Please share some info about your business so we can offer a <br />
         solution that best serves your needs. </p>
         <br />
         <FormButton text = "Request ATM"></FormButton>

      </div>
    </div>
  )
}

export default Ready
