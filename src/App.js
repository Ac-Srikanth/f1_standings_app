import React from 'react';
import './App.css';
import {useState} from 'react'
import Button from '@material-ui/core/Button'
// axios calls
import getDriversStandingsData from './f1_data_calls/getDriversStandings'
import getConstructorStandingsData from './f1_data_calls/getConstructorStandings'

// components
import DriverStandingsTable from './components/DriverStandingsTable'
import ConstructorsStandingsTable from './components/ConstructorsStandingsTable'


// primary calls

const dummyButtomStyle = {
  height:"400px",
  width:"300px"
}

function App() {
// states

const [driverStandingsData, setDriverStandingsData] = useState("driversDataWillComeHere")
const [constructorStandingsData, setConstructorStandingsData] = useState("constructorDataWillComeHere")

// handlers

async function primarySetDriversStandingsData() {
  setDriverStandingsData(await getDriversStandingsData())
}

async function primarySetConstructorsStandingsData() {
  setConstructorStandingsData(await getConstructorStandingsData())
}

// App:

  return (
    <div className="App">
      <Button onClick={primarySetDriversStandingsData} style={dummyButtomStyle} variant="contained">get drivers data</Button>
      <Button onClick={primarySetConstructorsStandingsData} style={dummyButtomStyle} variant="contained">get constructor data</Button>
      <DriverStandingsTable  driverStandingsData={driverStandingsData} />
      <ConstructorsStandingsTable constructorStandingsData={constructorStandingsData} />
    </div>
  )
}

export default App;
