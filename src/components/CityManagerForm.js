import React from 'react'

const CityManagerForm = ({ handleSubmit, city, setCity, editingCity }) => {


    const btnText = editingCity ? "Save changes" : "Add new location";

    return (
        <form id='cityManagerForm' className="col-12 col-lg-auto mb-5" role="search" onSubmit = { handleSubmit }>
            <small className='text-warning small_text'>
                Add frequently used locations
            </small>
            <div className="mb-3">
                <label htmlFor="recipient-name" className="col-form-label text-warning small_text">
                    City, Country (ex. New York, US)
                </label>
                <input 
                    type="search" 
                    className="form-control manage_location_input" 
                    id="recipient-name" 
                    autoComplete='off' 
                    required={ true }
                    value={ city }
                    onChange={(e) => setCity(e.target.value)} 
                />
            </div>
            <button 
                type="submit" 
                className="btn rounded-pill px-3 manage_location_btn"
            >
                { btnText }
            </button>
        </form>
    )
};

export default CityManagerForm;