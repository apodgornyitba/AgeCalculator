import './App.css';
import {Button, Card, TextField} from "@mui/material";
import icon from './assets/images/icon-arrow.svg'
import {useEffect, useState} from "react";

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

    const [rollingClass, setRollingClass] = useState('');

    useEffect(() => {
        if (years === '--' && months === '--' && days === '--') {
            return
        }
        setRollingClass('rollingNumber');
        const timeout = setTimeout(() => {
            setRollingClass('');
        }, 1000);
        return () => clearTimeout(timeout);
    }, [years, months, days]);

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
        const intDay = parseInt(day)
        const intMonth = parseInt(month)
        const intYear = parseInt(year)

        if (intMonth === 2 && intYear % 4 === 0 && intDay > 29) {
            setDayError('Must be a valid date')
            setMonthError(' ')
            setYearError(' ')
            return false
        } else if (intMonth === 2 && intYear % 4 !== 0 && intDay > 28) {
            setDayError('Must be a valid date')
            setMonthError(' ')
            setYearError(' ')
            return false
        } else if ((intMonth === 4 || intMonth === 6 || intMonth === 9 || intMonth === 11) && intDay > 30) {
            setDayError('Must be a valid date')
            setMonthError(' ')
            setYearError(' ')
            return false
        } else if (intYear > 2024 || (intYear === 2024 && intMonth > 1) || (intYear === 2024 && intMonth === 1 && intDay > 15)) {
            setDayError('Must be in the past')
            setMonthError(' ')
            setYearError(' ')
            return false
        } else {
            setDayError('')
            setMonthError('')
            setYearError('')
            return true
        }

    }

    function handleCalculateOnClick() {
        if (day === '' || month === '' || year === '') {
            setDays('--')
            setMonths('--')
            setYears('--')
            return
        }
        if (!validateDate()) {
            setDays('--')
            setMonths('--')
            setYears('--')
            return
        }
        const intDay = parseInt(day)
        const intMonth = parseInt(month)
        const intYear = parseInt(year)

        const today = new Date()
        let todayDay = today.getDate()
        let todayMonth = today.getMonth() + 1
        let todayYear = today.getFullYear()

        if (intDay > todayDay) {
            todayMonth -= 1
            if (intMonth === 4 || intMonth === 6 || intMonth === 9 || intMonth === 11) {
                todayDay += 30
            } else if (intMonth === 2 && intYear % 4 === 0) {
                todayDay += 29
            } else if (intMonth === 2 && intYear % 4 !== 0) {
                todayDay += 28
            } else {
                todayDay += 31
            }
        }
        const dayDiff = (todayDay - intDay).toString()

        if (intMonth > todayMonth) {
            todayMonth += 12
            todayYear -= 1
        }
        const monthDiff = (todayMonth - intMonth).toString()

        const yearDiff = (todayYear - intYear).toString()

        setDays(dayDiff)
        setMonths(monthDiff)
        setYears(yearDiff)

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
                      },
                      '& .rollingNumber': {
                          animation: 'spin 0.0001s linear infinite',
                          display: 'inline-block',
                      },
                      '@keyframes spin': {
                          '0%': {
                              transform: 'rotateX(0deg)',
                          },
                          '100%': {
                              transform: 'rotateX(360deg)',
                          },
                      },
                  }}>
                <div className="date">
                    <div className="day">
                        <p style={{color: dayError ? 'hsl(0, 100%, 67%)' : 'inherit'}}>DAY</p>
                    </div>
                    <div className="month">
                        <p style={{color: dayError ? 'hsl(0, 100%, 67%)' : 'inherit'}}>MONTH</p>
                    </div>
                    <div className="year">
                        <p style={{color: dayError ? 'hsl(0, 100%, 67%)' : 'inherit'}}>YEAR</p>
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
                        <h1 className={rollingClass} style={{color: 'hsl(259, 100%, 65%)'}}>{years}</h1>
                        <h1>&nbsp;years</h1>
                    </div>
                    <div className="months">
                        <h1 className={rollingClass} style={{color: 'hsl(259, 100%, 65%)'}}>{months}</h1>
                        <h1>&nbsp;months</h1>
                    </div>
                    <div className="days">
                        <h1 className={rollingClass} style={{color: 'hsl(259, 100%, 65%)'}}>{days}</h1>
                        <h1>&nbsp;days</h1>
                    </div>
                </div>
            </Card>
        </div>
    );
}

export default App;