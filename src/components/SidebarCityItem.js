import React from 'react';
import { useSelector } from 'react-redux';
import { getShowBtnGroup } from '../redux/SidebarSlice';
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsTrash3 } from "react-icons/bs";
import { LuMapPinOff } from "react-icons/lu";

const SidebarCityItem = () => {

    const showBtnGroup = useSelector(getShowBtnGroup);

    return (
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
    )
};

export default SidebarCityItem;