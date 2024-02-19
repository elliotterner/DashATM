import React from 'react'
import RevIncrease from '../assets/RevIncrease.png'
import Heads from '../assets/3head.png'
import cc from '../assets/cc.png'

function RequestATM() {
  return (
    <div className='Request'>
        <h1>Why Request a Free ATM for  <br />your Business?</h1>
        <div className='RequestContent'>
            <div className='RequestText1'>
                <br />
                <h2>Surcharge Revenue</h2>
                <p>
                Experts suggest 7 revenue streams as the ideal <br />
                hedge against market downturn. We help business <br />
                owners diversify - offering an industry leading <br />
                percentage of surcharge revenue, with the opprotunity <br />
                to earn more based on the ATMs performance.
                </p>
            </div>
            <img src= {RevIncrease} alt="image of revenue increasing" className='RequestImg1'/>
            <div className='RequestText2'>
                <br />
                <h2>Increase Traffic and Spend</h2>
                <p>
                The proof is in the pudding. Or in this case, in <br />
                the numbers. On average, an ATM customer spends <br />
                15% more in a store than a non-ATM customer. <br />
                Combined with the fact that ATMs increase walk-by <br />
                traffic, installing an ATM is a no-brainer.
                </p>
            </div>
            <img src= {Heads} alt="Picture of 3 heads" className='RequestImg2'/>
            <div className='RequestText3'>
                <br />
                <br />
                <h2>Decrease Credit Card Fees</h2>
                <p>
                Credit card fees have been climbing dramatically <br />
                over the last decade, and have become the second <br />
                highest operating cost for small businesses. Having <br /> 
                an ATM on-site encourages cash usage - reducing <br /> 
                these inconvenient 1-3% fees.
                </p>
            </div>
            <img src={cc} alt="image of credit card" className='RequestImg3'/>
        </div>
    </div>
  )
}

export default RequestATM
