import React from 'react';
import './App.css';
import {useState} from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'


// axios calls
import getDriversStandingsData from './f1_data_calls/getDriversStandings'
import getConstructorStandingsData from './f1_data_calls/getConstructorStandings'
import getScheduleData from './f1_data_calls/getSchedule'



// components
import DriverStandingsTable from './components/DriverStandingsTable'
import ConstructorsStandingsTable from './components/ConstructorsStandingsTable'
import ScheduleTable from './components/ScheduleTable'
import TweetsList from './components/TweetsList'


// primary calls

const dummyButtomStyle = {
  height:"150px",
  width:"150px"
}

function App() {
// states

const [driverStandingsData, setDriverStandingsData] = useState("driversDataWillComeHere")
const [constructorStandingsData, setConstructorStandingsData] = useState("constructorDataWillComeHere")
const [scheduleData, setScheduleData] = useState("scheduleDataWillComeHere")
const [year, setYear] = useState(2019)


// handlers

async function primarySetDriversStandingsData() {
  setDriverStandingsData(await getDriversStandingsData(year))
}

async function primarySetConstructorsStandingsData() {
  setConstructorStandingsData(await getConstructorStandingsData(year))
}

async function primarySetScheduleData() {
  setScheduleData(await getScheduleData(year))
}

const handleTemporaryYearInput = (event) => {
  setYear(event.target.value)
}



// App:

  return (
    <div className="App">
      <TextField
        value = {year}
        onChange = {handleTemporaryYearInput}>
      </TextField>
      <Button onClick={primarySetDriversStandingsData} style={dummyButtomStyle} variant="contained">get drivers data</Button>
      <Button onClick={primarySetConstructorsStandingsData} style={dummyButtomStyle} variant="contained">get constructor data</Button>
      <Button onClick={primarySetScheduleData} style={dummyButtomStyle} variant="contained">get schedule data</Button>
      <DriverStandingsTable driverStandingsData={driverStandingsData} />
      <ConstructorsStandingsTable constructorStandingsData={constructorStandingsData} />
      <ScheduleTable scheduleData={scheduleData} />
      <TweetsList />

    </div>
  )
}

export default App

