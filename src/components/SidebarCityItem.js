import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { getShowBtnGroup } from '../redux/SidebarSlice';
import Swal from 'sweetalert2';
import { BsTrash3 } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";
import { getCity, getUnits, setCity } from '../redux/WeatherSlice';
import sunIco from '../assets/images/Sun.svg';
import moonIco from '../assets/images/Moon.svg';

const SidebarCityItem = ({ myCity, updatingInInput, deleteCity }) => {

    const [apiData, setApiData] = useState([]);
    const dispatch = useDispatch();
    const units = useSelector(getUnits);
    const selectedCity = useSelector(getCity);

    const apiKey = 'f60a3c61969e0f747d4947065c74bc1a';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=${units ? 'metric' : 'imperial'}&appid=${apiKey}`;

    useEffect(() => {
        axios
            .get(apiUrl)
            .then((response) => setApiData(response.data))
            .catch((error) => console.error(error));
    }, [apiUrl]);

    const cityName = apiData.name;
    // const country = apiData.sys?.country;
    const temperature = Math.round(apiData?.main?.temp);
    const showBtnGroup = useSelector(getShowBtnGroup);
    const weatherImgCode = apiData.weather?.[0]?.icon;

    const imgURL = weatherImgCode === '01d' 
    ? sunIco 
    : weatherImgCode === '01n' 
    ? moonIco 
    : `https://openweathermap.org/img/wn/${weatherImgCode}@2x.png`;

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
            deleteCity();
            Swal.fire({
            title: "Deleted!",
            text: "Your city has been deleted.",
            icon: "success",
            showConfirmButton: false,
            timer: 1700
            });
        }
        });
    };

    const handleShowFullForecast = () => {
        dispatch(setCity(cityName))
    };

    const unitTemp = units ? 'C' : 'F';

    const fullForecastBtnText = selectedCity === cityName ? 'Forecast now' : 'Full forecast'



    return (
        <li className="nav-item pb-2 my-3 d-flex flex-column border-bottom">
            <div className="ps-0 pe-2 pb-2 d-flex justify-content-between align-items-center" aria-current="page">
                <span className={ `sidebar_city_name ps-2 ${selectedCity === cityName ? 'active' : ''}`}>{ cityName }</span>
                <div>
                    <img 
                        className="me-2 weather_icon" 
                        src={ imgURL } 
                        alt="sun" 
                        width={weatherImgCode === '01d' || weatherImgCode === '01n' ? '25px' : '38px' } 
                    />
                    <span className={ `sidebar_city_temp ${selectedCity === cityName ? 'active' : ''}`}>{ temperature }&#176;{ unitTemp }</span>
                </div>
            </div>
            { showBtnGroup && (
                <div className="btn_group pe-1 d-flex justify-content-between">
                    <button 
                        type='button' 
                        className={`btn btn-sm rounded-pill px-3 manage_location_btn ${selectedCity === cityName ? 'active' : ''}`} 
                        onClick={ handleShowFullForecast }
                    >
                        { fullForecastBtnText }
                    </button>
                    <div>
                        <BsTrash3 
                            className='fs-4 s_ico me-2' 
                            onClick = { handleDelete } 
                        />
                        <FaEdit 
                            className='fs-4 s_ico me-2' 
                            onClick = { updatingInInput } 
                        />
                    </div>
                </div>
            )}
        </li>
    )
};

export default SidebarCityItem;