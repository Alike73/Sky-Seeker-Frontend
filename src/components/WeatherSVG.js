import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getUnits } from '../redux/WeatherSlice';
import { BsMoisture } from "react-icons/bs";
import { FaBoltLightning } from "react-icons/fa6";
import { FiSunrise } from "react-icons/fi";
import { FiSunset } from "react-icons/fi";
import WindSVG from './WindSVG';
import MoonStarsSVG from './MoonStarsSVG';
import WeatherSVGCurrentTime from './WeatherSVGCurrentTime';

const WeatherSVG = ({ apiData, weatherImgCode, mySunriseTime, mySunsetTime }) => {
    

    const units = useSelector(getUnits);
    const temperature = Math.round(apiData?.main?.temp);
    const feelsLike = Math.round(apiData?.main?.feels_like);
    const minTemp = Math.round(apiData?.main?.temp_min);
    const maxTemp = Math.round(apiData?.main?.temp_max);
    const humidity = Math.round(apiData?.main?.humidity);
    const windSpeed = Math.round(apiData?.wind?.speed);

    const weatherCode = apiData.weather?.[0]?.id;
    
    const [thunderstorm, setThunderstorm] = useState(null);
    const [clearSky, setClearSky] = useState(null);
    const [overcastClouds, setOvercastClouds] = useState(null);
    const [scatteredClouds, setScatteredClouds] = useState(null);
    const [rain, setRain] = useState(null);
    const [snow, setSnow] = useState(null);
    const [showSun, setShowSun] = useState(null);
    const [showMoon, setShowMoon] = useState(null);
    

    useEffect(() => {
        const thunderstormCodes = [200, 201, 202, 210, 211, 212, 221, 230, 231, 232,];
        const clearSkyCodes = [800];
        const scatteredCloudsCodes = [801, 802]; 
        const overcastCloudsCodes = [701, 711, 721, 731, 741, 751, 761, 762, 771, 781, 803, 804];
        const rainCodes = [300, 301, 302,310, 311, 312, 313, 314, 321, 500, 501, 502, 503, 504, 511, 520, 521, 522, 531];
        const snowCodes = [600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622];
        const iconDayList = ['01d', '02d', '03d', '04d', '09d', '10d', '11d', '13d', '50d'];
        const iconNightList = ['01n', '02n', '03n', '04n', '09n', '10n', '11n', '13n', '50n'];
        
        thunderstormCodes.includes(weatherCode) ? setThunderstorm(true) : setThunderstorm(false);
        clearSkyCodes.includes(weatherCode) ? setClearSky(true) : setClearSky(false);
        overcastCloudsCodes.includes(weatherCode) ? setOvercastClouds(true) : setOvercastClouds(false);
        scatteredCloudsCodes.includes(weatherCode) ? setScatteredClouds(true) : setScatteredClouds(false);
        rainCodes.includes(weatherCode) ? setRain(true) : setRain(false);
        snowCodes.includes(weatherCode) ? setSnow(true) : setSnow(false);
        iconDayList.includes(weatherImgCode) ? setShowSun(true) : setShowSun(false);
        iconNightList.includes(weatherImgCode) ? setShowMoon(true) : setShowMoon(false);
        
    }, [weatherCode, weatherImgCode]);

    const unitTemp = units ? 'C' : 'F';
    const unitWindSpeed = units ? 'm/s' : 'mph';


    return (
        <div>
            <svg className='weather_svg' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="100%" height="100%" viewBox="0 0 903.81496 419" xmlnsXlink="http://www.w3.org/1999/xlink">
                <g>
                    <text className='fs-2 svg_header_text' x="24" y="43" fill="hsl(0, 0%, 90%)">Min { minTemp }&#176;{ unitTemp }</text>
                    <text className='fs-2 svg_header_text' x="182" y="43" fill="hsl(0, 0%, 90%)">Max { maxTemp }&#176;{ unitTemp }</text>
                    <text className='fs-2 svg_header_text' x="395" y="43" fill="hsl(0, 0%, 90%)"> { humidity }&#37;</text>
                    <text className='fs-2 svg_header_text' x="517" y="43" fill="hsl(0, 0%, 90%)">{ windSpeed }{ unitWindSpeed }</text>
                    <BsMoisture className='fs-2 svg_header_text' x="347" y="19" fill="hsl(0, 0%, 90%)"/>
                    <WindSVG />
                    <line x1="2" y1="65" x2="626" y2="65" stroke="#3F3D56" strokeWidth="2" />
                    <line x1="170" y1="62" x2="170" y2="4" stroke="#e6e6e6" strokeWidth="2" />
                    <line x1="338" y1="62" x2="338" y2="4" stroke="#e6e6e6" strokeWidth="2" />
                    <line x1="478" y1="62" x2="478" y2="4" stroke="#e6e6e6" strokeWidth="2" />
                </g>
                <g>
                <text className='fs-1 fw-bold' x="128" y="268" fill="hsl(210, 11%, 71%)">Current</text>
                <text className='fs-1 fw-bold' x="406" y="268" fill="hsl(210, 11%, 71%)">Feels like</text>
                    <text className='display-1 fw-bold temperature' x="120" y="350" fill="hsl(43, 100%, 50%)">{ temperature }&#176;{ unitTemp }</text>
                    <text className='display-1 fw-bold feelsLike' x="406" y="350" fill="hsl(0, 0%, 90%)">{ feelsLike }&#176;{ unitTemp }</text>
                    <WeatherSVGCurrentTime apiData = { apiData } />
                    <FiSunrise className='fs-1 sunrise' x="220" y="175" />
                    <text className='fs-4 svg_header_text' x="270" y="200" fill="hsl(0, 0%, 90%)">{ mySunriseTime }</text>
                    <FiSunset className='fs-1 sunset' x="450" y="175" />
                    <text className='fs-4 svg_header_text' x="500" y="200" fill="hsl(0, 0%, 90%)">{ mySunsetTime }</text>
                    <line x1="2" y1="400" x2="550" y2="400" stroke="#3F3D56" strokeWidth="2" />
                    <line x1="338" y1="380" x2="338" y2="236" stroke="#e6e6e6" strokeWidth="2" />
                </g>

                <path d="M1002.29825,657.63462c-7.66862-.31841-14.65546-3.4134-17.8161-8.20809q-.22188-.3366-.41782-.68273c-1.15407-2.04287-1.5142-4.39169-.2526-6.40454s4.41342-3.54208,7.5786-3.22463,5.63632,2.842,4.32649,4.84032c-.29278-4.03819-.53206-8.28109,2.72379-11.79607a11.8971,11.8971,0,0,1,6.665-3.44471c6.56018-1.15377,10.91609,2.5554,11.78838,6.30113.64385,2.76482-.24562,5.57713-1.13059,8.31052,2.72833-3.22649,9.21772-4.662,14.18726-3.13827s7.72721,5.7944,6.02891,9.3367c-2.00047,4.17253-8.66851,6.32973-14.8625,7.46953C1016.00221,657.935,1008.33266,657.88517,1002.29825,657.63462Z" transform="translate(-148.09252 -240.5)" fill="#f2f2f2"/>
                <path d="M735.29825,657.63462c-7.66862-.31841-14.65546-3.4134-17.8161-8.20809q-.22188-.3366-.41782-.68273c-1.15407-2.04287-1.5142-4.39169-.2526-6.40454s4.41342-3.54208,7.5786-3.22463,5.63632,2.842,4.32649,4.84032c-.29278-4.03819-.53206-8.28109,2.72379-11.79607a11.8971,11.8971,0,0,1,6.665-3.44471c6.56018-1.15377,10.91609,2.5554,11.78838,6.30113.64385,2.76482-.24562,5.57713-1.13059,8.31052,2.72833-3.22649,9.21772-4.662,14.18726-3.13827s7.72721,5.7944,6.02891,9.3367c-2.00047,4.17253-8.66851,6.32973-14.8625,7.46953C749.00221,657.935,741.33266,657.88517,735.29825,657.63462Z" transform="translate(-148.09252 -240.5)" fill="#f2f2f2"/><polygon points="679.306 406.177 667.047 406.177 661.214 358.889 679.308 358.89 679.306 406.177" fill="#ffb8b8"/>
                <path d="M830.52529,658.56159l-39.53052-.00147v-.5a15.38605,15.38605,0,0,1,15.38648-15.38623h.001l24.1438.001Z" transform="translate(-148.09252 -240.5)" fill="#2f2e41"/><polygon points="816.262 394.707 804.705 398.799 783.42 356.172 800.476 350.132 816.262 394.707" fill="#ffb8b8"/>
                <path d="M971.269,645.3652l-37.26281,13.19639-.16693-.47131a15.38606,15.38606,0,0,1,9.36673-19.64037l.00092-.00033,22.7588-8.05979Z" transform="translate(-148.09252 -240.5)" fill="#2f2e41"/>
                <path d="M827.05741,630.80006a4.61332,4.61332,0,0,1-.82031-.07421l-14.99194-2.72559a4.52108,4.52108,0,0,1-3.69751-4.33691c-2.1792-100.91407,8.53467-168.72852,31.8435-217.33594a4.47342,4.47342,0,0,1,4.69092-2.48145l53.91162,7.78321a4.50521,4.50521,0,0,1,3.82788,3.94726l4.75391,41.90332a3.54563,3.54563,0,0,0,.14185.666l51.68921,154.86914a4.5194,4.5194,0,0,1-2.866,5.63086L941.57206,623.302a4.52335,4.52335,0,0,1-5.44824-2.25684L866.20561,489.20827a1.50017,1.50017,0,0,0-2.80689.34961L831.43754,627.263A4.48168,4.48168,0,0,1,827.05741,630.80006Z" transform="translate(-148.09252 -240.5)" fill="#1B1A55"/>
                <path d="M784.44969,324.5973a10.52739,10.52739,0,0,1,.2393,1.64013l42.95745,24.782,10.44141-6.01094L849.219,359.58076,831.76867,372.0183a8,8,0,0,1-9.59819-.23384L777.874,336.83863a10.4971,10.4971,0,1,1,6.57573-12.24133Z" transform="translate(-148.09252 -240.5)" fill="#ffb8b8"/>
                <path d="M828.23667,348.54228a4.49518,4.49518,0,0,1,2.21126-3.025l19.713-11.02278a12.49741,12.49741,0,0,1,15.32664,19.74413l-15.71732,16.32122a4.5,4.5,0,0,1-6.80392-.37268l-13.88374-17.994A4.495,4.495,0,0,1,828.23667,348.54228Z" transform="translate(-148.09252 -240.5)" fill="#6c63ff"/><circle cx="726.04977" cy="57.06582" r="24.56103" fill="#ffb8b8"/>
                <path d="M898.05864,416.86842a4.49986,4.49986,0,0,1-.728-.05957L844.17729,408.095a4.49988,4.49988,0,0,1-3.67407-5.374l2.58593-12.1914c-1.32373-1.97461-12.10254-19.14551,1.02564-35.27442a22.01039,22.01039,0,0,1,20.43335-22.92187l27.46924-2.08692a22.12706,22.12706,0,0,1,23.02172,27.88477l-12.593,55.2373A4.51031,4.51031,0,0,1,898.05864,416.86842Z" transform="translate(-148.09252 -240.5)" fill="#6c63ff"/>
                <path d="M947.6947,463.05847a10.74272,10.74272,0,0,0-4.27021-15.90952L913.161,354.10209l-17.53839,8.322,33.11316,90.59865a10.80091,10.80091,0,0,0,18.95894,10.03573Z" transform="translate(-148.09252 -240.5)" fill="#ffb8b8"/>
                <path d="M919.855,369.59337l-23.28842,7.035a4.81687,4.81687,0,0,1-6.15823-3.90862l-3.5355-23.995A13.37737,13.37737,0,0,1,912.507,341.063l10.31233,21.866a4.81689,4.81689,0,0,1-2.96431,6.66438Z" transform="translate(-148.09252 -240.5)" fill="#6c63ff"/>
                <path d="M850.26787,298.51445a30.44348,30.44348,0,0,0,32.21073-6.76432c-2.57623,6.80639-1.856,35.674-1.856,35.674s22.84668-10.84668,25.94629-12.74359c18.30713-11.20417-6.9419-59.94287-27.94629-52.25641-3.55762,1.30188-6.529,2.83372-7.96807,6.33788-3.13633-3.86875-9.07321-4.70786-13.63995-2.72072s-7.81312,6.29343-9.55868,10.95785a27.4066,27.4066,0,0,0,1.993,23.11342Z" transform="translate(-148.09252 -240.5)"/>
                <path d="M743.09252,240.5h-562a33.03244,33.03244,0,0,0-33,33v154a33.03244,33.03244,0,0,0,33,33h562a33.03244,33.03244,0,0,0,33-33v-154A33.03244,33.03244,0,0,0,743.09252,240.5Zm31,187a31.03964,31.03964,0,0,1-31,31h-562a31.03964,31.03964,0,0,1-31-31v-154a31.03964,31.03964,0,0,1,31-31h562a31.03964,31.03964,0,0,1,31,31Z" transform="translate(-148.09252 -240.5)" fill="#3f3d56"/>

                { showMoon && (
                    <MoonStarsSVG clearSky = { clearSky } />
                )}
                { showSun && (
                <path className={ clearSky ? 'glow_sun' : undefined } d="M236.84252,386a12,12,0,1,1,12-12A12.01375,12.01375,0,0,1,236.84252,386Zm0-22a10,10,0,1,0,10,10A10.0113,10.0113,0,0,0,236.84252,364Z" transform="translate(-148.09252 -240.5)" fill={ clearSky ? "#FBA834" : "#3f3d56" }/>
                )}
                { showSun && (
                <path className={ clearSky ? 'glow_sun' : undefined } d="M236.44872,359a1,1,0,0,1-1-1V346.5a1,1,0,0,1,2,0V358A1,1,0,0,1,236.44872,359Z" transform="translate(-148.09252 -240.5)" fill={ clearSky ? "#FBA834" : "#3f3d56" }/>
                )}
                { showSun && (
                <path className={ clearSky ? 'glow_sun' : undefined } d="M220.84252,374.60645h-11.5a1,1,0,0,1,0-2h11.5a1,1,0,1,1,0,2Z" transform="translate(-148.09252 -240.5)" fill={ clearSky ? "#FBA834" : "#3f3d56" }/>
                )}
                { showSun && (
                <path className={ clearSky ? 'glow_sun' : undefined } d="M262.84252,374.60645h-11.5a1,1,0,0,1,0-2h11.5a1,1,0,0,1,0,2Z" transform="translate(-148.09252 -240.5)" fill={ clearSky ? "#FBA834" : "#3f3d56" }/>
                )}
                { showSun && (
                <path className={ clearSky ? 'glow_sun' : undefined } d="M251.0266,363.67236a1,1,0,0,1-.69629-1.71777l4.81592-4.67236a1,1,0,0,1,1.39258,1.43554l-4.81592,4.67237A.99626.99626,0,0,1,251.0266,363.67236Z" transform="translate(-148.09252 -240.5)" fill={ clearSky ? "#FBA834" : "#3f3d56" }/>
                )}
                {showSun && (
                <path className={ clearSky ? 'glow_sun' : undefined } d="M221.65844,363.67236a.99668.99668,0,0,1-.69629-.28222l-4.81592-4.67237a1,1,0,1,1,1.39258-1.43554l4.81592,4.67236a1,1,0,0,1-.69629,1.71777Z" transform="translate(-148.09252 -240.5)" fill={ clearSky ? "#FBA834" : "#3f3d56" }/>
                )}
                { showSun && (
                <path className={ clearSky ? 'glow_sun' : undefined } d="M217.84252,391a1.00025,1.00025,0,0,1-.71753-1.69678l4.81592-4.95947a1.00017,1.00017,0,0,1,1.43506,1.39355l-4.81592,4.95948A.99855.99855,0,0,1,217.84252,391Z" transform="translate(-148.09252 -240.5)" fill={ clearSky ? "#FBA834" : "#3f3d56" }/>
                )}
                { showSun && (
                <path className={ clearSky ? 'glow_sun' : undefined } d="M256.84252,392a.995.995,0,0,1-.71558-.30176l-5.81591-5.95947a.99979.99979,0,1,1,1.43115-1.39648l5.81592,5.95947A.99975.99975,0,0,1,256.84252,392Z" transform="translate(-148.09252 -240.5)" fill={ clearSky ? "#FBA834" : "#3f3d56" }/>
                )}
                { showSun && (
                <path className={ clearSky ? 'glow_sun' : undefined } d="M236.44872,402a1,1,0,0,1-1-1V389.5a1,1,0,0,1,2,0V401A1,1,0,0,1,236.44872,402Z" transform="translate(-148.09252 -240.5)" fill={ clearSky ? "#FBA834" : "#3f3d56" }/>
                )}

                <path className={ overcastClouds ? 'glow_cloud overcastCloudsUpAndDown' : undefined } d="M367.25609,393H333.87426a13.00186,13.00186,0,0,1,0-26h2.553a15.70676,15.70676,0,0,1,14.13794-9,15.866,15.866,0,0,1,15.697,15h.99389a10.00136,10.00136,0,0,1,0,20Zm-33.38183-24a11.00221,11.00221,0,0,0,0,22h33.38183a8.00171,8.00171,0,0,0,0-16h-1.96362a1,1,0,0,1-1-1,13.88125,13.88125,0,0,0-13.72729-14,13.72466,13.72466,0,0,0-12.57471,8.39453,1.00022,1.00022,0,0,1-.91895.60547Z" transform="translate(-148.09252 -240.5)" fill={ overcastClouds ? "#FBA834" : "#3f3d56" }/>
                <path className={ scatteredClouds ? 'glow_cloud move_cloud_sun' : undefined } d="M478.76391,374.05664l-.7793-1.8418A10.002,10.002,0,1,0,464.84423,359.188l-1.84863-.7627a12.0019,12.0019,0,1,1,15.76831,15.63135Z" transform="translate(-148.09252 -240.5)" fill={ scatteredClouds ? "#FBA834" : "#3f3d56" }/>
                <path className={ scatteredClouds ? 'glow_cloud' : undefined } d="M480.25609,393H446.87426a13.00186,13.00186,0,0,1,0-26h2.553a15.70676,15.70676,0,0,1,14.13794-9,15.866,15.866,0,0,1,15.697,15h.99389a10.00136,10.00136,0,0,1,0,20Zm-33.38183-24a11.00221,11.00221,0,0,0,0,22h33.38183a8.00171,8.00171,0,0,0,0-16h-1.96362a1,1,0,0,1-1-1,13.88125,13.88125,0,0,0-13.72729-14,13.72466,13.72466,0,0,0-12.57471,8.39453,1.00022,1.00022,0,0,1-.91895.60547Z" transform="translate(-148.09252 -240.5)" fill={ scatteredClouds ? "#FBA834" : "#3f3d56" }/>
                <path d="M593.25609,388h-4.01391a1,1,0,0,1,0-2h4.01391a8.00171,8.00171,0,0,0,0-16h-1.96362a1,1,0,0,1-1-1,13.88125,13.88125,0,0,0-13.72729-14,13.72466,13.72466,0,0,0-12.57471,8.39453,1.00022,1.00022,0,0,1-.91895.60547h-3.19726a11.00221,11.00221,0,0,0,0,22h3.1001a1,1,0,0,1,0,2h-3.1001a13.00186,13.00186,0,0,1,0-26h2.553a15.70676,15.70676,0,0,1,14.13794-9,15.866,15.866,0,0,1,15.697,15h.99389a10.00136,10.00136,0,0,1,0,20Z" transform="translate(-148.09252 -240.5)" fill={ thunderstorm || rain ?  "#FBA834" : "#3f3d56" } className={ thunderstorm || rain ? 'glow_cloud' : undefined }/>
                {thunderstorm && <FaBoltLightning className='fs-1 text-warning' x="408" y="130" />}
                <path className={ thunderstorm || rain ? 'move_rain_2' : undefined } d="M576.39965,392.31689a1,1,0,0,1-1-1v-11.5a1,1,0,1,1,2,0v11.5A1.00005,1.00005,0,0,1,576.39965,392.31689Z" transform="translate(-148.09252 -240.5)" fill={ thunderstorm || rain ?  "#FBA834" : "#3f3d56" }/>
                <path className={ thunderstorm || rain ? 'move_rain_1' : undefined } d="M569.39965,398.31689a1,1,0,0,1-1-1v-11.5a1,1,0,1,1,2,0v11.5A1.00005,1.00005,0,0,1,569.39965,398.31689Z" transform="translate(-148.09252 -240.5)" fill={ thunderstorm || rain ?  "#FBA834" : "#3f3d56" }/>
                <path className={ thunderstorm || rain ? 'move_rain_3' : undefined } d="M583.39965,401.31689a1,1,0,0,1-1-1v-11.5a1,1,0,1,1,2,0v11.5A1.00005,1.00005,0,0,1,583.39965,401.31689Z" transform="translate(-148.09252 -240.5)" fill={ thunderstorm || rain ?  "#FBA834" : "#3f3d56" }/>
                <path className={ snow ? 'glow_cloud' : undefined } d="M706.25609,388h-4.01391a1,1,0,0,1,0-2h4.01391a8.00171,8.00171,0,0,0,0-16h-1.96362a1,1,0,0,1-1-1,13.88125,13.88125,0,0,0-13.72729-14,13.72466,13.72466,0,0,0-12.57471,8.39453,1.00022,1.00022,0,0,1-.91895.60547h-3.19726a11.00221,11.00221,0,0,0,0,22h3.1001a1,1,0,1,1,0,2h-3.1001a13.00186,13.00186,0,0,1,0-26h2.553a15.70676,15.70676,0,0,1,14.13794-9,15.866,15.866,0,0,1,15.697,15h.99389a10.00136,10.00136,0,0,1,0,20Z" transform="translate(-148.09252 -240.5)" fill={ snow ? "#FBA834" : "#3f3d56" }/><circle className={ snow ? 'snow_move_1' : undefined } cx="539.75" cy="142.75" r="2.25" fill={ snow ? "#0DCAF0" : "#3f3d56" }/><circle className={ snow ? 'snow_move_2' : undefined } cx="547.25" cy="145.75" r="2.25" fill={ snow ? "#0DCAF0" : "#3f3d56" }/><circle className={ snow ? 'snow_move_3' : undefined } cx="534.75" cy="149.25" r="2.25" fill={ snow ? "#0DCAF0" : "#3f3d56" }/><circle className={ snow ? 'snow_move_4' : undefined } cx="542.75" cy="154.25" r="2.25" fill={ snow ? "#0DCAF0" : "#3f3d56" }/>
                
                <path d="M265.09252,312h-58a8,8,0,0,1,0-16h58a8,8,0,0,1,0,16Z" transform="translate(-148.09252 -220.5)" fill={ clearSky ? "#FBA834" : "#6c63ff" }/>
                <path d="M378.09252,312h-58a8,8,0,1,1,0-16h58a8,8,0,0,1,0,16Z" transform="translate(-148.09252 -220.5)" fill={ overcastClouds ? "#FBA834" : "#6c63ff" }/>
                <path d="M491.09252,312h-58a8,8,0,1,1,0-16h58a8,8,0,0,1,0,16Z" transform="translate(-148.09252 -220.5)" fill={ scatteredClouds ? "#FBA834" : "#6c63ff" }/>
                <path d="M604.09252,312h-58a8,8,0,0,1,0-16h58a8,8,0,0,1,0,16Z" transform="translate(-148.09252 -220.5)" fill={ thunderstorm || rain ?  "#FBA834" : "#6c63ff" }/>
                <path d="M717.09252,312h-58a8,8,0,0,1,0-16h58a8,8,0,0,1,0,16Z" transform="translate(-148.09252 -220.5)" fill={ snow ? "#FBA834" : "#6c63ff" }/>
                <path d="M1050.90748,659.5h-381a1,1,0,1,1,0-2h381a1,1,0,0,1,0,2Z" transform="translate(-148.09252 -240.5)" fill="#3f3d56"/>
            </svg>
        </div>
    )
}

export default WeatherSVG