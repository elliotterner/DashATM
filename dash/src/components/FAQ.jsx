import React from "react";
import Accordion from "./Accordion";

import '../styles.css';

function FAQ() {
 return (
   <div className="FAQWholePage">
    <div className="FAQContainer">
        <Accordion
        title="Why request an ATM for my business?"
        content= {(
            <div className="FAQDiv1" >
                <p>There are a variety of benefits, including: </p>
                <ul>
                    <li>Surcharge revenue</li>
                    <li>Increased foot traffic</li>
                    <li>improved customer satisfaction</li>
                    <li>Reduced credit card fees</li>

                </ul>
            </div>)}
        />
        <Accordion
        title="How much does an ATM installation cost?"
        content = {(
        <div>
            <p>Free means free at Dash ATM</p>
            <p>We offer a full service installation to qualified businesses including the cost of the machine, Wifi box, and receipt paper. Assuming your business passes our qualifications (we look for a reasonable level of foot traffic and a need for cash), the only thing you have to cover is the cost of electricity. </p>
        </div>
        )}
        />
        <Accordion
        title="What is our service area?"
        content= "We service the continental United States (lower 48). We have locations in cities and small towns from coast to coast. "
        />
        <Accordion
        title="Will I have to load my own machine?"
        content= "We know how much work running a business is, and cover all the cash loading. This is a truly passive source of income for your company!"
        />
        <Accordion 
        title="Do I have to fix the ATM if it breaks down?"
        content = "Absolutely not - we have a network of technicians we rely on throughout the lower 48. If your machine goes down, you can trust it will be back up and running momentarily. "
        />
        <Accordion 
        title ="How will I get paid?"
        content={(
            <div>
                <p>In whatever way is easiest!</p>
                <p>We work with you to create a payment plan. We can direct deposit the funds in your account daily or mail a check at the end of every 1 or 3 months. </p>
            </div>
            
        )}
        />
        <Accordion 
        title ="What kinds of businesses do you service?"
        content={(
            <div>
                <p>We will install an ATM anywhere it is needed. </p>
                <p>To date, this has included barber shops, zoos, restaurants, concerts, hotels, etc…</p>
            </div>
        )}
        />

    </div>
   </div>
 );
}

export default FAQ;
