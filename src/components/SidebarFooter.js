import React from 'react'

const SidebarFooter = () => {

    return (
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
    )
};

export default SidebarFooter;