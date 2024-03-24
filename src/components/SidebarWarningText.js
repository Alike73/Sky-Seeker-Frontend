import React from 'react'

const SidebarWarningText = () => {

    return (
        <li className="nav-item px-2 py-3 my-3 warning_text_wrapper">
            <h3 className='warning_title pb-3'>There is no such a city yet.</h3>
            <p className='warning_text fs-5'>Start typing and add your favorite location</p>
        </li>
    )
};

export default SidebarWarningText;