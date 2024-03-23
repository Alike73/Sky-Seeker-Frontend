import React from 'react'

const PressureSVG = ({ currentPressure }) => {

    return (
        <svg className='ms-2 pressure_svg' fill="#000000" height="70px" width="70px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
            viewBox="0 0 185.421 185.421" xmlSpace="preserve">
            <g>
                <g>
                    <g>
                        <path d="M155.762,23.192c-5.23-12.101-17.528-20.058-31.432-20.058c-17.526,0-32,12.741-33.825,29.07
                            C77.769,33.331,67.75,43.953,67.75,56.843c0,13.017,10.154,23.763,23.206,24.675c0.218,0.042,0.439,0.063,0.663,0.063h63.166
                            c0.096,0,0.19-0.004,0.284-0.01c0.28,0.007,0.562,0.01,0.844,0.01c16.271,0,29.508-13.097,29.508-29.195
                            C185.422,36.239,172.059,23.119,155.762,23.192z M155.914,74.45c-0.326,0-0.649-0.007-0.97-0.021
                            c-0.054-0.004-0.108-0.004-0.162-0.004c-0.139,0-0.277,0.007-0.413,0.024H92.074c-0.089-0.01-0.176-0.017-0.265-0.024
                            c-9.493-0.48-16.927-8.204-16.927-17.582c0-10.025,8.702-18.021,18.829-17.582c0.973,0.045,1.924-0.324,2.627-0.996
                            c0.705-0.676,1.104-1.619,1.104-2.594c0-14.009,12.062-25.406,26.888-25.406c11.791,0,22.097,7.132,25.647,17.746
                            c0.526,1.57,2.074,2.622,3.719,2.417c0.73-0.07,1.469-0.104,2.218-0.104c12.339,0,22.377,9.897,22.377,22.063
                            C178.291,64.552,168.253,74.45,155.914,74.45z"/>
                        {/* <path d="M87.669,120.192l5.042,5.042l12.607-12.606c0.669-0.669,1.045-1.574,1.045-2.521c0-0.947-0.376-1.852-1.045-2.521
                            L92.711,94.981l-5.042,5.042l6.519,6.519H0v7.132h94.188L87.669,120.192z"/> */}
                            <text className='fs-2' x="24" y="113" fill="#EEEDEB">{ currentPressure } hPa</text>
                        <path className='pressure_svg_arrow_top' d="M153.33,152.033l-5.042,5.042l6.519,6.519H60.619v7.132h94.188l-6.519,6.519l5.042,5.042l12.607-12.606
                            c0.669-0.669,1.045-1.574,1.045-2.521c0-0.947-0.376-1.852-1.045-2.521L153.33,152.033z"/>
                        <path className='pressure_svg_arrow_down' d="M116.195,148.718l5.042,5.042l12.607-12.606c0.669-0.669,1.045-1.574,1.045-2.521s-0.376-1.852-1.045-2.521
                            l-12.607-12.606l-5.042,5.042l6.519,6.519H28.526v7.132h94.188L116.195,148.718z"/>
                    </g>
                </g>
            </g>
        </svg>
    )
};

export default PressureSVG;