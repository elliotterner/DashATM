import React from 'react'
import FormButton from './FormButton'

function Services() {
  return (
    <div className='Services'>
        <div className='ServiceTypes'>
            <div className='ATM_Placements'>
                <p>
                <h3>ATM Placements</h3>
                <br />
                As simple as it sounds. We install a top-of-
                the-line ATM machine in your business for 
                free. We keep the machine filled with cash and  
                compliant, while you increase revenue.
                </p>
                <br />
                <FormButton text = "Learn More" buttonColor = "white" textColor = "#267eb5" />
            </div>
            <div className='ATM_Processing'>
                <p>
                <h3>ATM Processing</h3>
                <br />
                Already own an ATM and want to begin 
                making money? Activate and optimize your
                machine through our processing program and
                custom analytics dashboard

                </p>
                <br />
                <FormButton text = "Learn More" buttonColor = "white" textColor = "#267eb5" />

            </div>
            <div className='Event_ATMs'>
                <p>
                <h3>Event ATMs</h3>
                <br />
                If you’re planning an event, odds are you
                have enough to worry about. We can help. Our
                turnkey mobile ATM program keeps attendees 
                on-site and helps them spend more cash

                </p>
                <br />
                <FormButton text = "Learn More" buttonColor = "white" textColor = "#267eb5" />
            </div>

        </div>
    </div>
  )
}

export default Services
