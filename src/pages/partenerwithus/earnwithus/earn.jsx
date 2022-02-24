import { useState } from "react"
import "./earn.css"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'



export const EarnWithUs = ()=>{
 
    const [ans , setans] = useState(false);
    const [ans2 , setans2] = useState(false);
    const [ans3 , setans3] = useState(false);
    const [ans4 , setans4] = useState(false);
    const [ans5 , setans5] = useState(false);
    const [ans6 , setans6] = useState(false);
    const [ans7 , setans7] = useState(false);
    const [ans8 , setans8] = useState(false);
    const [ans9 , setans9] = useState(false);
    const [ans10 , setans10] = useState(false);


    return (
        <div id="main2">

            <div className="headearn">Earn with us</div>
           
          <div id="headimage1">
               <div><h3>Let your bike earn for you</h3>
                 <button>Start Earning</button>
               </div>
          </div>
   
           <div className="howitworks">
                <h3>How it works</h3>
                <div className="yellowline"></div>
                <p>Invest in Royal Brothers bikes and start earning every month</p>
            
           </div>
          
          <div id="threeimage">
              <div className="threeonsimg">
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/earn-with-us-bike-81d79aef0e9a9908d0d51428e4a106a6c9a3101591e0df2ece5bf8efcaade671.png" alt=""/>
                  <p>Invest on RB Bikes</p>
              </div>
              <div className="arrowicon"><span>{`>`}</span></div>
              <div  className="threeonsimg">
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/earn-with-us-hands-f6e9a7724c7010b47a13bc240a8fbab8f3e65ffba9110f9a24ccbcd88fb476c1.png" alt="" />
                  <p>Get into contract withRoyal Brothers</p>
              </div>
              <div className="arrowicon"><span>{`>`}</span></div>
              <div  className="threeonsimg">
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/earn-with-us-coins-4781f1edea5f52d7dfb3b3a7fa3021c9ee623b5c9015dc35a4926d955ad5d7c5.png" alt="" />
                  <p>Get paid every month</p>
              </div>
          </div>

          <div className="startearning">
          <button>
              Start Earning
          </button>
          </div>


          <div className="howitworks">
                <h3>FAQ's</h3>
                <div className="yellowline"></div>
           </div>

           <div id="qustionnans">
               <div className="qustion" onClick={()=>{
                   setans(!ans);
               }}>What am I investing on?<span><KeyboardArrowDownIcon/></span></div>
               <div style={{ display: ans ? "block" : "none" }} className="answer">You’ll be investing in buying new bikes which will be rented out through Royal Brothers – Bike Rentals.</div>
               <br/>

               <div className="qustion" onClick={()=>{
                   setans2(!ans2);
               }}>How much will I earn?<span><KeyboardArrowDownIcon/></span></div>
               <div style={{ display: ans2 ? "block" : "none" }} className="answer">We share the revenue of the bike at a ratio of 70:30 (70% for you and 30% for Royal brothers). As the bike will be placed in locations where the demand is well-evaluated, you can expect maximum bookings and hence a good return on investment.</div>
               <br/>
               
               <div className="qustion" onClick={()=>{
                   setans3(!ans3);
               }}>How will I get paid?<span><KeyboardArrowDownIcon/></span></div>
               <div style={{ display: ans3 ? "block" : "none" }} className="answer">We will credit your earnings every month to your bank account.</div>
               <br/>

               
               <div className="qustion" onClick={()=>{
                   setans4(!ans4);
               }}>How will I track my earnings?<span><KeyboardArrowDownIcon/></span></div>
               <div style={{ display: ans4 ? "block" : "none" }} className="answer"> We will share access to RB Partner App through which you can track your earnings</div>
               <br/>

               <div className="qustion" onClick={()=>{
                   setans5(!ans5);
               }}> Which bikes should I buy?<span><KeyboardArrowDownIcon/></span></div>
               <div style={{ display: ans5 ? "block" : "none" }} className="answer">We will be estimating and informing you which bike model can earn your best returns. This is based on the demand in a given location. So, you can suitably make the decision on buying the vehicles.</div>
               <br/>


               <div className="qustion" onClick={()=>{
                   setans6(!ans6);
               }}>Will the bikes be registered under my name?<span><KeyboardArrowDownIcon/></span></div>
               <div style={{ display: ans6 ? "block" : "none" }} className="answer">No, as per the Motor vehicles Act, one should have a valid license to rent out the vehicles. Hence, the vehicle must be registered under the company’s (Royal Brothers) name to rent it out. However, there will be an agreement where we mention that the ownership of vehicle lies with you.</div>
               <br/>

               <div className="qustion" onClick={()=>{
                   setans7(!ans7);
               }}>What is the term of the agreement?<span><KeyboardArrowDownIcon/></span></div>
               <div style={{ display: ans7 ? "block" : "none" }} className="answer">The agreement is for a term period of 3 years.</div>
               <br/>

               <div className="qustion" onClick={()=>{
                   setans8(!ans8);
               }}>What will happen after 3 years?<span><KeyboardArrowDownIcon/></span></div>
               <div style={{ display: ans8 ? "block" : "none" }} className="answer" >The vehicle will be handed over to you. It can be later be re-sold or could be used for personal usage. If required, we will assist you in re-selling of the vehicle.</div>
               <br/>

               <div className="qustion" onClick={()=>{
                   setans9(!ans9);
               }}>Who will handle the registration process?<span><KeyboardArrowDownIcon/></span></div>
               <div style={{ display: ans9 ? "block" : "none" }} className="answer">A team of experts at Royal Brothers will take care of everything from helping you purchase the bike to registration and onboarding. You’ll be updated at every step of the process.</div>
               <br/>

               <div className="qustion" onClick={()=>{
                   setans10(!ans10);
               }}>Who will take care of maintenance of the bike?<span><KeyboardArrowDownIcon/></span></div>
               <div style={{ display: ans10 ? "block" : "none" }} className="answer">Our in-house maintenance team will take care of all the bike maintenance issues. However, the maintenance charges will have to borne by you.</div>
            </div>

           
            <div className="startearning">
          <button>
              Start Earning
          </button>
          </div>
           
          <div className="howitworks">
                <h3>Why Royal Brothers?</h3>
                <div className="yellowline"></div>
           </div>

           <Slide easing="ease" className="Slide">
           <div className="each-slide">
        
             <div><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/earn-with-us-sun-0f2b3091e4e998eb847f7ec7b6337617a929c1167ecec3774058e68fb532a644.png" alt="" /><span>Established in 2015</span></div>
              <div><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/earn-with-us-cities-2f8d575396b865ae5603f3ebbb6b938e04f99810927589311d40a6e84b6d4723.png" alt="" /><span>Serving in 30+ cities across India</span></div>
            <div><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/earn-with-us-states-fd12cb4ebb45ccab480bb437c15a60a0eeb5ff02ff1024f44282f8ced3afca38.png" alt="" /><span>Licence to operate in 7 State</span></div>
          </div>
          
          <div className="each-slide">
             
            <div><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/earn-with-us-km-8bb5e5b5bc63e8378e03865dd02fbc65621449f52c30b91e6971890cacf4761b.png" alt="" /><span>100k+ Booking Served and counting</span></div>          
            <div><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/earn-with-us-km-served-66bbd32cb5cf08d1d98ce8c678c90e868db56399b4c060987c3af7c815848361.png" alt="" /><span>15 million KM served</span></div>
            <div><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/earn-with-us-states-fd12cb4ebb45ccab480bb437c15a60a0eeb5ff02ff1024f44282f8ced3afca38.png" alt="" /><span>Serving in 30+ cities across India</span></div>
          </div>
         
           </Slide>

    </div>
    )
}