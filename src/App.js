import './App.css';
import {Card, TextField} from "@mui/material";
import icon from './assets/images/icon-arrow.svg'
import {useState} from "react";

function App() {
    const [years, setYears] = useState('--')
    const [months, setMonths] = useState('--')
    const [days, setDays] = useState('--')

    return (
        <div className="App">
            <Card className="primaryCard"
                  sx={{
                        width: '800px',
                      '& .MuiInputBase-root': {
                          fontFamily: 'inherit',
                          fontWeight: 'bold',
                          fontSize: '32px',
                          marginRight: '25px',
                      },
                      '& .MuiOutlinedInput-input': {
                          height: '50%',
                          width: '115px',
                      },
                  }}>
                <div className="date">
                    <div className="day">
                        <p>DAY</p>
                    </div>
                    <div className="month">
                        <p>MONTH</p>
                    </div>
                    <div className="year">
                        <p>YEAR</p>
                    </div>
                </div>
                <div className="textEntry">
                    <TextField
                        placeholder='DD'
                    />
                    <TextField
                        placeholder='MM'
                    />
                    <TextField
                        placeholder='YYYY'
                    />
                </div>
                <div className="lineContainer">
                    <hr className="line"/>
                    <div className="circle">
                        <img src={icon} alt="icon"/>
                    </div>
                </div>
                <div className="ageDisplay">
                    <div className="years">
                        <h1>{years} years</h1>
                    </div>
                    <div className="months">
                        <h1>{months} months</h1>
                    </div>
                    <div className="days">
                        <h1>{days} days</h1>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default App;
