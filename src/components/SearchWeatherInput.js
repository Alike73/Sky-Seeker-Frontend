import React from 'react';
import weatherSun from "../assets/images/weatherSun.svg";
import { useDispatch, useSelector } from 'react-redux';
import { getMyCity, setCity, setMyCity } from '../redux/WeatherSlice';

const SearchWeatherInput = () => {
    
    const myCity = useSelector(getMyCity);
    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        dispatch(setMyCity(e.target.value));
    };
    
    const handleSearch = () => {
        if (myCity !== '') {
            dispatch(setCity(myCity))
        }
    };

    const handleEnterKey = (e) => {
        if (e.keyCode === 13) {
            dispatch(setCity(myCity))
        }
    };

    return (
        <div className='search_box mb-5'>
            <div className="input-wrapper"> 
                <button className="icon" type="button" onClick = { handleSearch }>
                    <svg
                        width="25px"
                        height="25px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        <path
                            d="M22 22L20 20"
                            stroke="#fff"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                    </svg>
                </button>
                <input 
                type="text" 
                name="text" 
                className="input" 
                placeholder="type your city name.."
                value = { myCity }
                onChange = { handleInputChange }
                onKeyDown = { handleEnterKey }
                />
                <img className="weatherSun" src={ weatherSun } alt="weather sun" />
            </div>
        </div>
    )
};

export default SearchWeatherInput;