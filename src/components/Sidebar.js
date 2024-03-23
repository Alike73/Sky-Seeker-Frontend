import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getIsOpen, getShowBtnGroup, setShowBtnGroup } from '../redux/SidebarSlice';
import UnitsToggler from './UnitsToggler';
import { getUnits } from '../redux/WeatherSlice';
import CityManagerForm from './CityManagerForm';
import SidebarCityItem from './SidebarCityItem';
import SidebarFooter from './SidebarFooter';

const Sidebar = () => {

    const isOpen = useSelector(getIsOpen);
    const units = useSelector(getUnits);
    const showBtnGroup = useSelector(getShowBtnGroup);
    const dispatch = useDispatch();

    const handleShowBtnGroup = () => {
        dispatch(setShowBtnGroup(!showBtnGroup))
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
                <SidebarCityItem />
            </ul>
            <button 
                type="button" 
                className="btn rounded-pill px-3 mb-auto manage_location_btn"
                onClick = { handleShowBtnGroup }
            >
                Manage location
            </button>
            <hr />
            <SidebarFooter />
        </div>
    )
};

export default Sidebar;