import React from 'react'

const UnitsToggler = () => {

    return (
        <div className="checkbox-wrapper-35">
            <input value="private" name="switch" id="switch" type="checkbox" className="switch" />
            <label htmlFor="switch">
                <span className="switch-x-text">
                    &#176;
                </span>
                <span className="switch-x-toggletext">
                    <span className="switch-x-unchecked">
                        <span className="switch-x-hiddenlabel">
                        Unchecked: 
                        </span>
                        C
                    </span>
                    <span className="switch-x-checked">
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