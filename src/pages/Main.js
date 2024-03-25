import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from 'axios';
import { getCity, getUnits } from "../redux/WeatherSlice";
import FooterClouds from "../components/FooterClouds";
import SearchWeatherInput from "../components/SearchWeatherInput";
import Sidebar from "../components/Sidebar";
import SidebarToggler from "../components/SidebarToggler";
import WeatherSVG from "../components/WeatherSVG";
import sunIco from '../assets/images/Sun.svg';
import moonIco from '../assets/images/Moon.svg';
import PressureSVG from "../components/PressureSVG";


const Main = () => {

    const [apiData, setApiData] = useState([]);
    const city = useSelector(getCity);
    const units = useSelector(getUnits);
    const apiKey = 'f60a3c61969e0f747d4947065c74bc1a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units ? 'metric' : 'imperial'}&appid=${apiKey}`;

    // Using fetch method:
    // useEffect(() => {
    //     fetch(apiUrl)
    //     .then((res) => res.json())
    //     .then((data) => setApiData(data));
    // }, [apiUrl]);

    // Using axios:
    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => setApiData(response.data))
            .catch((error) => console.error(error));
    }, [apiUrl]);

    // console.log(apiData);

    const cityName = apiData.name;
    const country = apiData.sys?.country;
    const conditions = apiData.weather?.[0]?.description;
    const currentPressure = apiData?.main?.pressure;

    // Convert the offset to milliseconds
    const timezoneOffsetMilliseconds = apiData.timezone * 60 * 1000;

    // Convert sunrise and sunset timestamps to local time
    const mySunriseTimestamp = (apiData.sys?.sunrise * 1000) + timezoneOffsetMilliseconds;
    const mySunsetTimestamp = (apiData.sys?.sunset * 1000) + timezoneOffsetMilliseconds;

    // Create Date objects for local sunrise and sunset times
    const mySunriseDate = new Date(mySunriseTimestamp);
    const mySunsetDate = new Date(mySunsetTimestamp);

    // Format the local sunrise and sunset times
    const mySunriseTime = mySunriseDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
    const mySunsetTime = mySunsetDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

    const timezoneOffsetSeconds = apiData.timezone;

    // Adjust the date calculation based on timezone offset
    const currentDate = new Date(new Date().getTime() + timezoneOffsetSeconds * 1000);
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = days[currentDate.getUTCDay()]; // Use getUTCDay to avoid local time issues
    const todayDate = currentDate.getUTCDate(); // Use getUTCDate to avoid local time issues
    const month = months[currentDate.getUTCMonth()]; // Use getUTCMonth to avoid local time issues
    const year = currentDate.getUTCFullYear(); // Use getUTCFullYear to avoid local time issues

    const finalDate = day + ' ' + todayDate + ' ' + month + ' ' + year;

    const weatherImgCode = apiData.weather?.[0]?.icon;

    const imgURL = weatherImgCode === '01d' 
    ? sunIco 
    : weatherImgCode === '01n' 
    ? moonIco 
    : `https://openweathermap.org/img/wn/${weatherImgCode}@2x.png`;

    return (
        <div className="main">
            <SidebarToggler />
            <Sidebar />
            <div className="container col-xl-10 col-xxl-8 px-2 py-5">
                <div className="col mb-3">
                    <h1 className="display-1 fw-bold lh-1 text-center mb-5">
                        Sky Seeker
                    </h1>
                    
                    <SearchWeatherInput />
                    <h2 className="display-5 lh-1 text-center mb-3 city_country_title">
                    { cityName }, { country }
                    </h2>
                    <p className="fs-4 fw-normal lh-1 date_text text-center mb-3">
                        { finalDate }
                    </p>
                    <div className="d-flex justify-content-center align-items-center">
                        <p className="fs-6 fw-bold lh-1 conditions_text text-center px-2">
                            { conditions }
                            <img className="ms-2 weather_icon" src={ imgURL } alt="sun" width={weatherImgCode === '01d' || weatherImgCode === '01n' ? '40px' : '72px' } />
                        </p>
                        <p className="d-flex align-items-center fs-6 fw-bold lh-1 pressure_text text-center px-2">
                            pressure
                            <PressureSVG currentPressure = { currentPressure } />
                        </p>
                    </div>
                    <WeatherSVG 
                        apiData = { apiData }  
                        weatherImgCode = { weatherImgCode }
                        mySunriseTime = { mySunriseTime }
                        mySunsetTime = { mySunsetTime } 
                    />
                </div>
            </div>
                <FooterClouds />
        </div>
    )
};

export default Main;