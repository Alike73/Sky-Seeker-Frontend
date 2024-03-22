

const WindSVG = () => {

    return (
        <svg 
        stroke="currentColor" 
        fill="none" 
        strokeWidth="2" 
        viewBox="0 0 24 24" 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        className="fs-2" 
        x="484" 
        y="19" 
        height="1em" 
        width="1em" 
        xmlns="http://www.w3.org/2000/svg"
        >
            <path className="wind_top" d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2"></path>
            <path className="wind_middle" d="M9.6 4.6A2 2 0 1 1 11 8H2"></path>
            <path className="wind_down" d="M12.6 19.4A2 2 0 1 0 14 16H2"></path>
        </svg>
    )
};

export default WindSVG;