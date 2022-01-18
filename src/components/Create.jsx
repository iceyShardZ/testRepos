import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import Room from './Room'
import { useState,useEffect } from 'react';
import { Consumer } from './ContextAPI'
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from "react-router-dom";

export default function Home(props){

    const [roomName, setroomName] = useState("");


return(

   <Consumer>
   {(val)=>{
       return(
   <div className="text App">
   this a create room element
   <br></br>
   <input type="text" name="roomName" id="roomNameInput" onChange={e=>setroomName(e.target.value)} placeholder="Room name"/>
   <br></br>
   <select name="roomType" id="roomType">
       {val.possibleRoomTypes.map((e)=>{
           
           return (<option value={e.typeName}>{e.typeName}</option>)
           })}
       
   </select>
   <br></br>
   <input type="button" value="create room" onClick={()=>{
       var roomType = document.getElementById('roomType').value;
      if (roomName!=""){ 
        val.setRoomsInTheHouse([{roomName: roomName, roomType: roomType, roomPic: "path", roomContains: []},...val.roomsInTheHouse])
        val.roomRoutesArray.push((<Route path={"/room"+roomName}  element={<Room/>} />))
      }
   }}/>
   </div>

       )}}
  </Consumer>
)

}