import React from 'react'

const SidebarWarningText = () => {

    return (
        <li className="nav-item px-2 py-3 my-3 warning_text_wrapper">
            <h3 className='warning_title pb-3'>There is no such a location yet.</h3>
            <p className='warning_text fs-5'>
                Start typing<br />
                and <br/> 
                add your favorite location <br/> 
                on the field above
            </p>
        </li>
    )
};

export default SidebarWarningText;