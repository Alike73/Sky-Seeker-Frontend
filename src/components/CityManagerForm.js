import React from 'react'

const CityManagerForm = () => {

    return (
        <form id='cityManagerForm' className="col-12 col-lg-auto mb-5" role="search">
            <small className='text-warning'>
                Add frequently used locations
            </small>
            <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label text-warning">
                    City, Country (ex. New York, US)
                </label>
                <input 
                    type="search" 
                    className="form-control manage_location_input" 
                    id="recipient-name" 
                    autoComplete='off' 
                    required 
                />
            </div>
            <button 
                type="button" 
                className="btn rounded-pill px-3 manage_location_btn"
            >
                Add
            </button>
        </form>
    )
};

export default CityManagerForm;