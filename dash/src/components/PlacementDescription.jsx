import React from 'react'
import Gear from '../assets/k (3).png'
import Bank from '../assets/k (2).png'
import cc from '../assets/cc.png'
import FormButton from './FormButton'

function PlacementDescription() {
    return (
    <>
    <div className='Request'>
        <div className='RequestContent'>
            <div className='RequestText1'>
                <br />
                <h2>Maintenance</h2>
                <p>
                ATMs are subject to strict regulation when it <br /> 
                comes to the software and parts that they use. <br /> 
                Our technicians have a combined 40+ years of  <br />
                experience and can handle any issue that comes up. <br />
                You can expect your ATM to stay in working order <br />
                with the parts, labor, and tools we provide.
                </p>
            </div>
            <img src= {Gear} alt="image of gears" className='RequestImg1'/>
            <div className='RequestText2'>
                <br />
                <h2> Vault Loading</h2>
                <p>
                When you partner with Dash you get all the <br />
                advantages of an ATM machine without the upfront <br /> 
                investment. The cash itself is one of the biggest <br /> 
                investments when it comes to owning an ATM, and <br /> 
                we take care of it entirely! We give you the option <br />
                to fill the machine for an additional profit share, but<br />
                in most cases, we fill the ATM with the necessary cash. 
                </p>
            </div>
            <img src= {Bank} alt="image of bank" className='RequestImg2'/>
            <div className='RequestText3'>
                <br />
                <br />
                <h2>Processing</h2>
                <p>
                We partnered with a leading processor to make sure <br /> 
                ATM withdrawals are settled lightning fast. At no <br />
                cost to you, your customers can securely access their <br /> 
                cash, and you can save on burdensome credit card fees. 
                </p>
            </div>
            <img src={cc} alt="image of credit card" className='RequestImg3'/>
        </div>
    </div>
    <div className="ReadyForATM">
        <h3>Ready to get a free ATM for your Business? </h3>
        <FormButton text = "Apply For ATM" />
    </div>
    </>
  )
}

export default PlacementDescription