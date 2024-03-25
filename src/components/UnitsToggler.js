import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getUnits, setUnits } from '../redux/WeatherSlice';

const UnitsToggler = () => {

    const units = useSelector(getUnits);
    const dispatch = useDispatch();

    const toggleUnits = () => {
        dispatch(setUnits(!units)); // Toggle between metric and imperial
    };

    return (
        <div className="checkbox-wrapper-35">
            <input 
            value="private" 
            name="switch" 
            id="switch" 
            type="checkbox" 
            className="switch"
            onChange = { toggleUnits }
            />
            <label htmlFor="switch">
                <span className={ `switch-x-text ${units ? "text-info" : "text-warning" }`}>
                    &#176;
                </span>
                <span className="switch-x-toggletext">
                    <span className="switch-x-unchecked text-info">
                        <span className="switch-x-hiddenlabel">
                        Unchecked: 
                        </span>
                        C
                    </span>
                    <span className="switch-x-checked text-warning">
                        <span className="switch-x-hiddenlabel">
                            Checked: 
                        </span>
                        F
                    </span>
                </span>
            </label>
        </div>

    )
};

export default UnitsToggler;