import React, { useEffect, useState } from 'react';
import myLogo from '../assets/images/3d-doggy-avatar-removebg-preview.png';


const SidebarFooter = () => {

    const [year, setYear] = useState(null);
    useEffect(() => {
        setYear(new Date().getFullYear())
    }, [])

    return (
        <footer className="py-2 sidebar_footer">
            <p className="text-center sidebar_footer_text">
                © { year } Created by Alimzhan
                <img src={ myLogo } alt="developer at the computer with his dog" width={42} />
            </p>
        </footer>
    )
};

export default SidebarFooter;