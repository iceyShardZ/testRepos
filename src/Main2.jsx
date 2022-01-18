import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import Create from './Create'
import Room from './Room'
import { useState,useEffect } from 'react';
import { Consumer } from './ContextAPI'
import { useNavigate,useLocation } from "react-router-dom";

export default function CreateEditView(props){

const [userID, setuserID] = useState();

return(

   <Consumer>
   {(val)=>{
       return(

         <div className="text App">

            <br></br>
            <h1>Users</h1>
            <br></br>
            <input type="number" name="userIDfilter" id="userIDfilter" onChange={(e)=>{
               setuserID(userID => props.getUser(e.target.value))
            }}/>
            {val.map((p,i)=>{
               if (userID  && p.name==userID.name)
               return (
               <div id="userDiv" key={i}>
               <h3>
               {p.name} 
               </h3>
               <h6>
               {p.phone} 
               </h6>
               <h6>
               {p.company.catchPhrase} 
               </h6>
               <br></br>
               </div>
               )

            })}

         </div>
       )}}
  </Consumer>
)

}

   /*
   <input type="button" value="wut" onClick={()=>{

      console.log(val.currentRoom.roomName)
      
   }} />
   */