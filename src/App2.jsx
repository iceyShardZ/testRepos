
import './App.css';
import { useState,useEffect } from 'react';
import Main2 from './Main2'
import Room from './Room'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './components/ContextAPI';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";




function App() {

  const [Data, setData] = useState([]);

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((data)=>setData(data))
    .then(json => console.log(json))
    
 });

 const getUserId = (userID) =>{

    var user=Data[userID]
    return user;

 }


  return (

    <div className='App' style={{overflow: "hidden"}}>
    <Router>
    <br></br>
    <Link to="/" className='Link'>Home</Link>
    <Provider value={Data}>
    <Routes>
      
      <Route path="/" element={<Main2 getUser={getUserId}/>}/>


    </Routes>
    </Provider>
    </Router>
    </div>
  );
}

export default App;


/*


  const [possibleRoomTypes, setPossibleRoomTypes] = useState([{}])
  const [possibleDeviceTypes, setProdList] = useState([{}])
  const [roomsInTheHouse, setRoomsInTheHouse] = useState([{}])
  const [roomRoutes, setRoomRoutes] = useState([{}])
  const [currentRoom, setCurrentRoom] = useState([{}])
  const [devicesAvailable, setDevicesAvailable] = useState([{}])


*/