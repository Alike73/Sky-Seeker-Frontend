import React from 'react'
import { useSelector } from "react-redux";
import { getIsOpen } from '../redux/SidebarSlice';
import UnitsToggler from './UnitsToggler';

const Sidebar = () => {

    const isOpen = useSelector(getIsOpen);

    return (
        <div className={ `d-flex flex-column flex-shrink-0 p-3 sidebar ${ isOpen ? "open" : "" }` }>
        <div className="units_toggler_wrapper mb-3">
            <small>Units toggler</small>
            <UnitsToggler />
        </div>
            <hr />
            <form className="col-12 col-lg-auto mb-5" role="search">
                <input id='sidebar_search' type="search" className="form-control" placeholder="Search..." aria-label="Search" />
            </form>
            <ul className="nav nav-pills flex-column mb-auto">
                <li className="nav-item my-2">
                    <a href="#abc" className="nav-link active" aria-current="page">
                    Cary 15&#176;C
                    </a>
                </li>
                <li className="nav-item my-2">
                    <a href="#abc" className="nav-link text-white">
                    Paris 17&#176;C
                    </a>
                </li>
                <li className="nav-item my-2">
                    <a href="#abc" className="nav-link text-white">
                    Prague 23 &#176;C
                    </a>
                </li>
                <li className="nav-item my-2">
                    <a href="#abc" className="nav-link text-white">
                    Sunnyvale 26 &#176;C
                    </a>
                </li>
                <li className="nav-item my-2">
                    <a href="#abc" className="nav-link text-white">
                    London 14&#176;C
                    </a>
                </li>
            </ul>
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