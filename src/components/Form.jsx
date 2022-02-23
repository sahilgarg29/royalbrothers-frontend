import React from "react"
import "./Form.css"
export const Form = () => {

  
 return(
    <>
    <div class="card">
  <div class="header">
  <div className="next_ride">
        <div className="next_rideone">
          <h1>Search for your ride</h1>
          <form >
            <div className="next"> <label>Pickup</label></div>
            <div className="input_main_one">
              <div  className="next_ridetwo"> <input name="pickupDate" type="date" min="2022-02-23" value=""/></div>
              <div className="next_ridethree"><input name="pickupTime" type="time" value=""/></div>
            </div>
            <div className="next"><label>DropOff</label></div>
            <div className="input_main_one">
               <div  className="next_ridetwo"> <input name="pickupDate" type="date" min="" value=""/></div> 
               <div className="next_ridethree"><input name="pickupTime" type="time" value=""/></div>
            </div>
           <div className="input_main_button"><button type="submit">Search</button></div> 
          </form>
         
      
        </div>

      </div>

   </div>
</div>
      
    </>
  );
};
 
  



        
