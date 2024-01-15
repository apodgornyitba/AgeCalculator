import './App.css';
import {Button, Card, TextField} from "@mui/material";
import icon from './assets/images/icon-arrow.svg'
import {useState} from "react";

function App() {
    const [years, setYears] = useState('--')
    const [months, setMonths] = useState('--')
    const [days, setDays] = useState('--')

    const [day, setDay] = useState('')
    const [month, setMonth] = useState('')
    const [year, setYear] = useState('')

    const [dayError, setDayError] = useState('')
    const [monthError, setMonthError] = useState('')
    const [yearError, setYearError] = useState('')
    const [dateError, setDateError] = useState('')

    function handleDayChange(event) {
        const input = event.target.value;
        if (input === '') {
            setDayError('This field is required')
        } else if (input < 1 || input > 31) {
            setDayError('Must be a valid day')
        } else {
            setDay(input)
            setDayError('')
        }
    }

    function handleMonthChange(event) {
        const input = event.target.value;
        if (input === '') {
            setMonthError('This field is required')
        } else if (input < 1 || input > 12) {
            setMonthError('Must be a valid month')
        } else {
            setMonth(input)
            setMonthError('')
        }
    }

    function handleYearChange(event) {
        const input = event.target.value;
        if (input === '') {
            setYearError('This field is required')
        } else if (input > 2024) {
            setYearError('Must be in the past')
        } else {
            setYear(input)
            setYearError('')
        }
    }

    function validateDate() {
        //Using an if statement, validate that the date is a valid date
        //If the month does not have 31 days, then the day must be less than 31, if not set dateError to 'Must be a valid date'
        //If the month is February and the year is not a leap year, then the day must be less than 28, if not set dateError to 'Must be a valid date'
        //If the month is February and the year is a leap year, then the day must be less than 29, if not set dateError to 'Must be a valid date'
        //If the date is past today's date, then set dateError to 'Must be in the past'
        //If the date is valid, then set dateError to ''


    }

    function handleCalculateOnClick() {

    }

    return (
        <div className="App">
            <Card className="primaryCard"
                  sx={{
                      width: '650px',
                      borderRadius: '20px',
                      borderBottomRightRadius: '25%',
                      boxShadow: 'none',
                      padding: '50px',
                      '& .MuiInputBase-root': {
                          fontFamily: 'inherit',
                          fontWeight: 'bold',
                          fontSize: '32px',
                          marginRight: '35px',
                          borderRadius: '10px',
                      },
                      '& .MuiOutlinedInput-input': {
                          height: '30px',
                          width: '115px',
                      },
                      '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderWidth: '1px',
                          borderColor: 'hsl(259, 100%, 65%) !important',

                      },
                      '& .MuiInputBase-input[type="number"]::-webkit-inner-spin-button, & .MuiInputBase-input[type="number"]::-webkit-outer-spin-button': {
                          WebkitAppearance: 'none',
                          margin: 0,
                      }
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
                        type={'number'}
                        placeholder='DD'
                        error={dayError !== ''}
                        helperText={dayError}
                        onChange={handleDayChange}
                    />
                    <TextField
                        type={'number'}
                        placeholder='MM'
                        error={monthError !== ''}
                        helperText={monthError}
                        onChange={handleMonthChange}
                    />
                    <TextField
                        type={'number'}
                        placeholder='YYYY'
                        error={yearError !== ''}
                        helperText={yearError}
                        onChange={handleYearChange}
                    />
                </div>
                <div className="lineContainer">
                    <hr className="line"/>
                    <div>
                        <Button
                            onClick={handleCalculateOnClick}
                            sx={{
                                backgroundColor: 'hsl(259, 100%, 65%)',
                                borderRadius: '50%',
                                height: '75px',
                                width: '75px',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: 'black',
                                },
                            }}
                        >
                            <img src={icon} alt="icon"/>
                        </Button>
                    </div>
                </div>
                <div className="ageDisplay">
                    <div className="years">
                        <h1 style={{color: 'hsl(259, 100%, 65%)'}}>{years}</h1>
                        <h1>&nbsp;years</h1>
                    </div>
                    <div className="months">
                        <h1 style={{color: 'hsl(259, 100%, 65%)'}}>{months}</h1>
                        <h1>&nbsp;months</h1>
                    </div>
                    <div className="days">
                        <h1 style={{color: 'hsl(259, 100%, 65%)'}}>{days}</h1>
                        <h1>&nbsp;days</h1>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default App;
