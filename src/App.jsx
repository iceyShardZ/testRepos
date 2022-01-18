
import './App.css';
import { useState,useEffect } from 'react';
import Main from '/components/Main'
import Room from '/components/Room'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './components/ContextAPI';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate, useLocation } from "react-router-dom";




function App() {



  const [possibleRoomTypes, setPossibleRoomTypes] = useState([
    {typeName: "bedroom",typePic: "path", Exclusive: "none"},
    {typeName: "bathroom",typePic: "path", Exclusive: "waterHeater"},
    {typeName: "kitchen",typePic: "path", Exclusive: "none"},
    {typeName: "livingroom",typePic: "path", Exclusive: "none"},
    {typeName: "custom",typePic: "path", Exclusive: "none"},
  ])
  const [possibleDeviceTypes, setPossibleDeviceTypes] = useState([
    {typeName: "AC",typeIcon: "path"},
    {typeName: "light",typeIcon: "path"},
    {typeName: "stereo",typeIcon: "path"},
    {typeName: "waterHeater",typeIcon: "path"},
    {typeName: "custom",typeIcon: "path"},
  ])
  const [roomsInTheHouse, setRoomsInTheHouse] = useState([])
  const [roomRoutes, setRoomRoutes] = useState([])
  const [currentRoom, setCurrentRoom] = useState([])
  const [devicesAvailable, setDevicesAvailable] = useState([{}])
  const [roomRoutesJsx, setroomRoutesJsx] = useState("");
  const [roomRoutesArray, setroomRoutesArray] = useState([

    (<Route path="/room1" element={<Room/>} />),
    (<Route path="/room2" element={<Room/>} />),
    (<Route path="/room3" element={<Room/>} />),
    (<Route path="/room4" element={<Room/>} />),
    (<Route path="/room5" element={<Room/>} />)

  ]);


  const [appValuesObj, setAppValuesObj] = useState({

    possibleRoomTypes: possibleRoomTypes,
    setPossibleRoomTypes: setPossibleRoomTypes,
    possibleDeviceTypes: possibleDeviceTypes,
    setPossibleDeviceTypes: setPossibleDeviceTypes,
    roomsInTheHouse: roomsInTheHouse,
    setRoomsInTheHouse: setRoomsInTheHouse,
    roomRoutes: roomRoutes,
    setRoomRoutes: setRoomRoutes,
    currentRoom: currentRoom,
    setCurrentRoom: setCurrentRoom,
    devicesAvailable: devicesAvailable,
    setDevicesAvailable: setDevicesAvailable,
    roomRoutesArray: roomRoutesArray


  });

  useEffect(() => {
    
    setAppValuesObj({

      possibleRoomTypes: possibleRoomTypes,
      setPossibleRoomTypes: setPossibleRoomTypes,
      possibleDeviceTypes: possibleDeviceTypes,
      setPossibleDeviceTypes: setPossibleDeviceTypes,
      roomsInTheHouse: roomsInTheHouse,
      setRoomsInTheHouse: setRoomsInTheHouse,
      roomRoutes: roomRoutes,
      setRoomRoutes: setRoomRoutes,
      currentRoom: currentRoom,
      setCurrentRoom: setCurrentRoom,
      devicesAvailable: devicesAvailable,
      setDevicesAvailable: setDevicesAvailable,
      setAppObj: setAppValuesObj,
      roomRoutesArray: roomRoutesArray

  
    });


  }, [
    possibleRoomTypes,
    possibleDeviceTypes,
    roomsInTheHouse,
    roomRoutes,
    currentRoom,
    devicesAvailable,
    roomRoutesArray
  ]);


  //possibleRoomTypesArray = [{}]
  //possibleDeviceTypesArray = [{}]
  //roomsInTheHouseArray = [{}]
  //roomRoutesArray = [{}]
  //currentRoomObj = {}
  //devicesAvailableForCurrentRoomArray = [{}]

  const setTheCurrentRoom = (r) =>{

    setCurrentRoom(r)

  }


  return (

    <div className='App' style={{overflow: "hidden"}}>
    <Router>
    <br></br>
    <Link to="/" className='Link'>Home</Link>
    <Provider value={appValuesObj}>
    <Routes>
      
      <Route path="/" element={<Main setRoom={setTheCurrentRoom}/>} />
      {roomRoutesArray}

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