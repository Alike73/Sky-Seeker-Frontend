import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getIsOpen, getShowBtnGroup, setShowBtnGroup } from '../redux/SidebarSlice';
import { getUnits } from '../redux/WeatherSlice';
import { addCity, deleteCity, editCity, getAllCities } from '../api/FetchSavedCities';
import Swal from 'sweetalert2';
import UnitsToggler from './UnitsToggler';
import CityManagerForm from './CityManagerForm';
import SidebarCityItem from './SidebarCityItem';
import SidebarFooter from './SidebarFooter';
import SidebarWarningText from './SidebarWarningText';

const Sidebar = () => {

    const [myCities, setMyCities] = useState([]);
    const [city, setCity] = useState('');
    const [cityId, setCityId] = useState("");
    const [editingCity, setEditingCity] = useState(false);
    const isOpen = useSelector(getIsOpen);
    const units = useSelector(getUnits);
    const showBtnGroup = useSelector(getShowBtnGroup);
    const dispatch = useDispatch();

    const handleShowBtnGroup = () => {
        dispatch(setShowBtnGroup(!showBtnGroup))
    };

    useEffect(() => {
        getAllCities(setMyCities)
    }, []);

    const updatingInInput = (_id, city) => {
        setCityId(_id)
        setCity(city)
        setEditingCity(true)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
        }).then((result) => {
            if (result.isConfirmed) {
                if(editingCity) {
                    editCity(cityId, city, setCity, setMyCities, setEditingCity)
                }
                else {
                    addCity(city, setCity, setMyCities)
                }
                Swal.fire({
                    icon: "success",
                    title: "Saved!",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    };

    const unitsSystem = units ? "metric" : "imperial";

    return (
        <div className={ `d-flex flex-column flex-shrink-0 p-3 sidebar ${ isOpen ? "open" : "" }` }>
        <div className="units_toggler_wrapper mb-3">
            <small>Units: ( <span className={ `${units ? "text-info" : "text-warning" }`}>{unitsSystem}</span> )</small>
            <UnitsToggler />
        </div>
            <hr />
            <CityManagerForm 
                handleSubmit = { handleSubmit } 
                city = { city } 
                setCity = { setCity } 
                editingCity = { editingCity } 
            />
            <ul className="nav nav-pills flex-column mb-5">
                { myCities.length === 0 ? (
                    <SidebarWarningText />
                ) : (
                    myCities.map((item) => <SidebarCityItem 
                        key = { item._id } 
                        myCity = { item.city }
                        updatingInInput = {() => updatingInInput(item._id, item.city)}
                        deleteCity={() => deleteCity(item._id, setMyCities)}  
                    />)
                )}
            </ul>
            { myCities.length !== 0 && (
                <button 
                    type="button" 
                    className="btn rounded-pill px-3 mb-auto manage_location_btn"
                    onClick = { handleShowBtnGroup }
                >
                    Manage location
                </button>
            )}
            <hr />
            <SidebarFooter />
        </div>
    )
};

export default Sidebar;