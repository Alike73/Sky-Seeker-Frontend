import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { getIsOpen } from '../redux/SidebarSlice';
import { FaMapMarkerAlt } from "react-icons/fa";
import { LuMapPinOff } from "react-icons/lu";
import { BsTrash3 } from "react-icons/bs";
import UnitsToggler from './UnitsToggler';
import { getUnits } from '../redux/WeatherSlice';
import CityManagerForm from './CityManagerForm';

const Sidebar = () => {

    const isOpen = useSelector(getIsOpen);
    const units = useSelector(getUnits);
    const [showBtnGroup, setShowBtnGroup] = useState(false);

    const handleShowBtnGroup = () => {
        setShowBtnGroup(!showBtnGroup)
    };

    const unitsSystem = units ? "metric" : "imperial";

    return (
        <div className={ `d-flex flex-column flex-shrink-0 p-3 sidebar ${ isOpen ? "open" : "" }` }>
        <div className="units_toggler_wrapper mb-3">
            <small>Units: ( <span className={ `${units ? "text-info" : "text-warning" }`}>{unitsSystem}</span> )</small>
            <UnitsToggler />
        </div>
            <hr />
            <CityManagerForm />
            <ul className="nav nav-pills flex-column mb-5">
                <li className="nav-item my-3 d-flex justify-content-between align-items-center border-bottom">
                    <a href="#abc" className="nav-link ps-0 pe-2 text-white d-flex align-items-center" aria-current="page">
                    <FaMapMarkerAlt className='fs-4 text-danger me-1' />
                    Cary 15&#176;C
                    </a>
                    { showBtnGroup && (
                        <div className="btn_group pe-1">
                            <BsTrash3 className='fs-4 s_ico me-2' />
                            <FaMapMarkerAlt className='fs-4 s_ico me-2' />
                            <LuMapPinOff className='fs-4 s_ico' />
                        </div>
                    )}
                </li>
                <li className="nav-item my-3 border-bottom">
                    <a href="#abc" className="nav-link text-white">
                    Paris 17&#176;C
                    </a>
                </li>
                <li className="nav-item my-3 border-bottom">
                    <a href="#abc" className="nav-link text-white">
                    Prague 23 &#176;C
                    </a>
                </li>
                <li className="nav-item my-3 border-bottom">
                    <a href="#abc" className="nav-link text-white">
                    Sunnyvale 26 &#176;C
                    </a>
                </li>
                <li className="nav-item my-3 border-bottom">
                    <a href="#abc" className="nav-link text-white">
                    London 14&#176;C
                    </a>
                </li>
            </ul>
            <button 
                type="button" 
                className="btn rounded-pill px-3 mb-auto manage_location_btn"
                onClick = { handleShowBtnGroup }
            >
                Manage location
            </button>
            <hr />
            <div className="dropdown">
            <a href="#abc" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2" />
                <strong>mdo</strong>
            </a>
            <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                <li><a className="dropdown-item" href="#abc">New project...</a></li>
                <li><a className="dropdown-item" href="#abc">Settings</a></li>
                <li><a className="dropdown-item" href="#abc">Profile</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#abc">Sign out</a></li>
            </ul>
            </div>
        </div>
    )
};

export default Sidebar;