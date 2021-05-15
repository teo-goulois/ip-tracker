import './App.scss';
import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Input from './screens/input'
import Leaflet from './screens/leaflet'
import Dashboard from './screens/dashboard'

function App() {
  
  const [ip, setIp] = useState(["retrieving data", "retrieving data", "retrieving data", 'retrieving data']);
  const [ location, setLocation ] = useState(['lat', 'lng'])

  return (

    
    <Router>
      <div className="App">

        <div className="bg-top">

          <h1 className="title">IP Address Tracker</h1>

          <div className="test">
             <Input setIp={setIp} setLocation={setLocation} />
          </div>
        </div>
        
 
        <div className="bg-bottom">
          <Dashboard ip={ip} location={location} />
         <Leaflet location={location}  />
        </div> 
        
      </div>
    </Router>
  );
}

export default App;
