import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getShowBtnGroup } from '../redux/SidebarSlice';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import { LuMapPinOff } from "react-icons/lu";
import { getUnits } from '../redux/WeatherSlice';

const SidebarCityItem = ({ city }) => {

    const [apiData, setApiData] = useState([]);
    const units = useSelector(getUnits);

    const apiKey = 'f60a3c61969e0f747d4947065c74bc1a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units ? 'metric' : 'imperial'}&appid=${apiKey}`;

    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => setApiData(response.data))
            .catch((error) => console.error(error));
    }, [apiUrl]);

    const cityName = apiData.name;
    const country = apiData.sys?.country;
    const temperature = Math.round(apiData?.main?.temp);

    const showBtnGroup = useSelector(getShowBtnGroup);
    return (
        <li className="nav-item my-3 d-flex justify-content-between align-items-center border-bottom">
            <a href="#abc" className="nav-link ps-0 pe-2 text-white d-flex align-items-center" aria-current="page">
            <FaMapMarkerAlt className='fs-4 text-danger me-1' />
            { cityName }, {  country } { temperature }&#176;C
            </a>
            { showBtnGroup && (
                <div className="btn_group pe-1">
                    <BsTrash3 className='fs-4 s_ico me-2' />
                    <FaMapMarkerAlt className='fs-4 s_ico me-2' />
                    <LuMapPinOff className='fs-4 s_ico' />
                </div>
            )}
        </li>
    )
};

export default SidebarCityItem;