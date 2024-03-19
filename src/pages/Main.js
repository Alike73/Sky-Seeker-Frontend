import FooterClouds from "../components/FooterClouds";
import SearchWeatherInput from "../components/SearchWeatherInput";
import Sidebar from "../components/Sidebar";
import SidebarToggler from "../components/SidebarToggler";
import WeatherSVG from "../components/WeatherSVG";


const Main = () => {

    return (
        <div className="main">
            <SidebarToggler />
            <Sidebar />
            <div className="container col-xl-10 col-xxl-8 px-4 py-5">
                <div className="col text-center text-lg-start mb-3">
                    <h1 className="display-1 fw-bold lh-1 text-body-emphasis mb-5">
                        Sky Seeker
                    </h1>
                    <SearchWeatherInput />
                    <h2 className="display-5 fw-bold lh-1 text-body-emphasis text-center mb-3">City name, country</h2>
                    <WeatherSVG />
                </div>
            </div>
                <FooterClouds />
        </div>
    )
};

export default Main;