import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import Create from './Create'
import Room from './Room'
import { useState,useEffect } from 'react';
import { Consumer } from './ContextAPI'
import { useNavigate,useLocation } from "react-router-dom";

export default function CreateEditView(props){

   const redirect = useNavigate();
   const location = useLocation();
   
   
   useEffect(() => {
      
      if (location.pathname="/")
      {
  
        props.setRoom("none")
  
      }
    }, [location.pathname]);

return(

   <Consumer>
   {(val)=>{
       return(
   <div className="text App">
      
   Display Value: 
   <Create/>
   {val.roomsInTheHouse.map((p,i)=>{
      val.roomRoutes.push({roomName:p.roomName, roomRoute:`/room${p.roomName}`})
   return (<div id="roomDiv"><button key={i} onClick={()=>{
      console.log(location.pathname);
      val.setCurrentRoom(val.roomsInTheHouse[i]); redirect(`/room${p.roomName}`)}
   }>{p.roomName}</button></div>)
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