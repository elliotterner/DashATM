import React from 'react'
import ATMLady from "../assets/ATMLady.png"
import FormButton from './FormButton'

function Hook() {
    return (
        <div className='HookHomePage'>
          <div className='HomeContainer1'>
            <div className='HomeBlock1'>
              <div>
                <h1>Flexible ATM solutions to help your customers access cash.</h1>
                <p>Increase foot traffic, customer satisfaction, and revenue.</p>
                <FormButton text = "Our Solutions"
                 size = "22px 65px"
                 color = "#267eb5"/>
              </div>
            </div>
            <div className='HomeBlock2'>
              <img src={ATMLady} alt="" />
            </div>
          </div>
          <div className='linebreak'></div>
        </div>
      )
}

export default Hook
