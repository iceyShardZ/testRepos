import { getValue } from "@testing-library/user-event/dist/utils";
import React from "react";
import { useState } from 'react';
import { Consumer } from './ContextAPI'

export default function Home(props){


return(

   <Consumer>
   {(val)=>{
       return(
   <div className="text App">
   this is "add device"
   </div>

       )}}
  </Consumer>
)

}