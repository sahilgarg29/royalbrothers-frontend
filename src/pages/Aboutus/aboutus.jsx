import "./aboutus.css" ;
import head_img from "./images1/head-img.png"
import journey_1 from "./images1/journey_1.png"
import journey_2 from "./images1/journey_2.png"
import journey_3 from "./images1/journey_3.png"
import journey_4 from "./images1/journey_4.png"
import journey_5 from "./images1/journey_5.png"
import last_img from "./images1/last-img.png"


export const AboutUs = ()=>{
    return (
        <div style={{backgroundColor:"rgb(252,252,252)"}}>
           
            <img id="aboutheadimg" src={head_img} alt="" />

            <div id="aboutPara">
                 <p>We are a bunch of millennials focused on building India’s largest mobility solutions provider. Our focus has led us to build a platform</p>
                 <p>providing rentals spanning across 14 states, 43 cities and 3 international cities.</p>
                 <p>Transportation and mobility solutions is one of the least understood and most unorganized markets. We see this as an unexplored</p>
                 <p>opportunity to build a system that can be trusted by everyone beyond barriers.</p>
                 <p>We have no limitations when it comes to two wheelers and enjoy serving everything from a scooter to a superbike available on both</p>
                 <p>website and mobile application.</p>
                 <p>We are obsessed with the concept of ‘Why buy when you can rent’.</p>
            </div>


            <div className="howitworks5678">
                <h3>Our Journey</h3>
                <div className="yellowline123456"></div>
           </div>


           <div id="aboutjourney123">
               <img src={journey_1} alt="" />
               <img src={journey_2} alt="" />
               <img src={journey_3} alt="" />
               <img src={journey_4} alt="" />
               <img src={journey_5} alt="" />
           </div>

           <p id="staytunedfor">Stay tuned for more <span>...</span></p>


           <div className="howitworks5678">
                <h3>What founder has to say</h3>
                <div className="yellowline123456"></div>
           </div>

           <div id="aboutlastimg">
               <img src={last_img} alt="" />
           </div>



            </div>

    )
}