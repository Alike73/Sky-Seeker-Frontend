import SearchWeatherInput from "../components/SearchWeatherInput";
import WeatherSVG from "../components/WeatherSVG";


const Main = () => {

    return (
        <div className="main">
            <div className="container-fluid col-xl-10 col-xxl-8 px-4 py-5">
                <div className="col text-center text-lg-start">
                    <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-5">
                        Sky Seeker
                    </h1>
                    <SearchWeatherInput />
                    <h2 className="display-5 fw-bold lh-1 text-body-emphasis text-center mb-3">City name, country</h2>
                    <WeatherSVG />
                </div>
            </div>
        </div>
    )
};

export default Main;