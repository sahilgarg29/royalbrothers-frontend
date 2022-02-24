import "./bikesdata.css";
import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import axios from "axios";

export const Bikes = ()=>{
    const [data , setdata]= React.useState([]);

    React.useEffect(()=>{
        getdata();
    } ,[])
   

    const getdata = ()=>{
         axios.get("https://royalbrothers-backend.herokuapp.com/api/bikes").then((resp)=>setdata(resp.data.bikes));
    }
    // const ascnding = ()=>{
    //     const ascdata = [...data].sort((a,b)=>{
    //         return a.pricePerHour-b.pricePerHour;
    //     })
    //     // setdata(ascdata)
        
    // }
    // const descending = ()=>{
    //     const ascdata = data.sort((a,b)=>{
    //         return b-a;
    //     })
    //     // setdata(ascdata)
    // }

    return (
        <div>

           <div className="headbikes">
             <p>Now rent two wheelers for 7 days at a lower special price.<span>Click here for modified Search</span></p>
           </div>
           
           <div className="sorthead">
                    <div >
                    <p>Filter</p>
                    </div>

                    <div className="sortingbtn">
                      <button> Sort by</button>
                      <button>Relevance</button>
                      <button >Price Low to High</button>
                      <button >Price High to Low</button>
                    </div>
                    
           </div>
          <hr/>
              

           <div className="container">

           <div>
               <div className="firstmain">

                 

                  <div>
                        
                    <h6>Select Date & Time</h6>
                    <div className="datetime">
                      <div className="Dateandtime">
                      <label>pickup date</label>
                      <input style={{width:"120%"}}/>
                      </div>
                      <div className="Dateandtime">
                      <label>Time</label>
                      <input/>
                      </div>
                    </div>
                  </div>

                      <div className="datetime">
                      <div className="Dateandtime">
                      <label>Dropoff date</label>
                      <input style={{width:"120%"}}/>
                      </div>
                      <div className="Dateandtime">
                      <label>Time</label>
                      <input/>
                      </div>
                      </div>

                       <div>
                      <h6>Search Duration</h6>
                       <p>2 Hours and 30 Minutes</p>
                       </div>

                       <div className="searching">
                       <h6>Search By Location</h6>
                      <Paper component="form" sx={{  alignItems: 'center'}}>
                        <InputBase
                         sx={{ ml: 1, flex: 1 }}
                         placeholder="Search Location"/>
                        </Paper>
                        </div>


                       <div className="overflow">
                          <div> <input type="checkbox"/> <p>Indiranager(near metro station)</p> </div><br/>
                          <div> <input type="checkbox"/> <p>Yashwantpur(BMCT station)</p></div><br/>
                          <div> <input type="checkbox"/> <p>Marathali CG clinic(karthik nager)</p></div><br/>
                          <div> <input type="checkbox"/> <p>Koramangala</p></div><br/>
                          <div> <input type="checkbox"/> <p>HSR layout (4th sector)</p></div><br/>
                          <div> <input type="checkbox"/> <p>Henur Lake(near axis bank)</p></div><br/>
                          <div> <input type="checkbox"/> <p>Whitefiled tansi Honda(Hoodi circle)</p></div><br/>
                       </div>

                       
                       <h6>Search By Bike Model</h6>
                      <Paper component="form" sx={{  alignItems: 'center'}}>
                        <InputBase
                         sx={{ ml: 1, flex: 1 }}
                         placeholder="Search Bike Model"/>
                        </Paper>


                        <div className="overflow">
                          <div> <input type="checkbox"/> <p>Yamaha Fascino</p> </div><br/>
                          <div> <input type="checkbox"/> <p>Honda Dio</p></div><br/>
                          <div> <input type="checkbox"/> <p>TVS hexal Heavy Duty</p></div><br/>
                          <div> <input type="checkbox"/> <p>Hero mastreo</p></div><br/>
                          <div> <input type="checkbox"/> <p>Honda Activa 4G</p></div><br/>
                          <div> <input type="checkbox"/> <p>Honda Activa 5G</p></div><br/>
                          <div> <input type="checkbox"/> <p>Aprilia SR 125</p></div><br/>
                          <div> <input type="checkbox"/> <p> Yobykes Drift (electric)</p></div><br/>
                          <div> <input type="checkbox"/> <p> TVS Ntorq 125</p></div><br/>
                          <div> <input type="checkbox"/> <p>Ather 450</p></div><br/>
                          <div> <input type="checkbox"/> <p> Pure EV Epluto (electric)</p></div><br/>
                          <div> <input type="checkbox"/> <p> Honda Activa 6G</p></div><br/>
                          <div> <input type="checkbox"/> <p>Royal Enfield Himalayan Gravel Grey</p></div><br/>
                          <div> <input type="checkbox"/> <p>Royal Enfield Classic 350 Reborn</p></div><br/>
                          <div> <input type="checkbox"/> <p> TVS Apache RTR 180 (BS6)</p></div><br/>
                       </div>

                
                    </div>
                    
                   
                    <div>
                    <button className="applyfilter">Apply Filter</button>
                    </div>
            
            
            </div>


{/* right side div start here */}


            <div className="secoundmain">
                 <div>
                   {
                       data.map((e)=>{
                           return(
                               <div className="mapbikes" key={e._id}>
                                   <p>zero deposite</p>
                                   <h6>{e.model}</h6>
                                   <img src={e.imageUrl} alt=""/> <br/>
                                   <span>Available at</span> <br/>
                                   <select>
                                   <option value="">Location</option>
                                       {
                                           e.locations.map((s)=>{
                                            return <option value="">{s.name}</option>
                                           })
                                       }
                                   </select>
                                   <div className="timingbike">
                                        <div>
                                            <p>10 AM</p>
                                            <p>{new Date().toDateString()}</p>
                                        </div>
                                        <div className="timingTo"><span>to</span></div>
                                        <div>
                                         <p>10 AM</p>
                                            <p>{new Date().toDateString()}</p>
                                        </div>
                                   </div>
    

                                   <div className="prizebike">
                                       <div>
                                           <p>₹{e.pricePerHour}</p>
                                           <span>(100 KM included)</span>
                                       </div>
                                       <div>
                                       <button>Book</button>
                                       </div>
                                   </div>
                            
                               </div>
                           )
                       })
                   }
                 </div>
             </div>


           </div>

           {/* <button className="applyfilter">Apply Filter</button> */}
          mjgvchsgjbhgmdc 
          vsfdv
          sfvasdv
          vsfvetrrfv
          avf
          v
          gveveverv
        
        
        </div>
    )
}