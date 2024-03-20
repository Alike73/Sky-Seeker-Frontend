import { useSelector } from "react-redux";
import axios from 'axios';
import { getCity, getUnits } from "../redux/WeatherSlice";
import FooterClouds from "../components/FooterClouds";
import SearchWeatherInput from "../components/SearchWeatherInput";
import Sidebar from "../components/Sidebar";
import SidebarToggler from "../components/SidebarToggler";
import WeatherSVG from "../components/WeatherSVG";
import { useEffect, useState } from "react";


const Main = () => {

    const [apiData, setApiData] = useState([]);
    const city = useSelector(getCity);
    const units = useSelector(getUnits);
    const apiKey = 'f60a3c61969e0f747d4947065c74bc1a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

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

    console.log(apiData);

    const cityName = apiData.name;
    const country = apiData.sys?.country;
    const conditions = apiData.weather?.[0]?.description;
    

    const currentDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const day = days[currentDate.getDay()];
    const todayDate = currentDate.getDate();
    const month = months[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    const finalDate = day + ' ' + todayDate + ' ' + month + ' ' + year;

    return (
        <div className="main">
            <SidebarToggler />
            <Sidebar />
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="col text-center text-lg-start mb-3">
                    <h1 className="display-1 fw-bold lh-1 text-body-emphasis mb-5">
                        Sky Seeker
                    </h1>
                    
                    <SearchWeatherInput />
                    <h2 className="display-5 fw-bold lh-1 text-body-emphasis text-center mb-3">
                    { cityName }, { country }
                    </h2>
                    <p className="fs-3 fw-bold lh-1 text-body-emphasis text-center mb-3">
                        { conditions }
                    </p>
                    <WeatherSVG apiData = { apiData } finalDate = { finalDate } />
                </div>
            </div>
                <FooterClouds />
        </div>
    )
};

export default Main;