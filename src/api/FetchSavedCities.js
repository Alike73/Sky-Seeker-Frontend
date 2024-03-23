

import axios from 'axios';

const myURL = 'http://localhost:7000';

// http://localhost:7000
// 

// GET:
const getAllCities = (setMyCities) => {
    axios.get(`${myURL}`)
    .then(({data}) => {console.log(data)
        setMyCities(data)
    })
}

// POST:
const addCity = (city, setCity, setMyCities) => {
    axios.post(`${myURL}/saveCity`, { city })
    .then((data) => {
        console.log(data)
        setCity("")
        getAllCities(setMyCities)
    })
};

// PUT:
const editCity = (cityId, city, setCity, setMyCities, setEditingCity) => {
    axios.post(`${myURL}/editCity`, { _id: cityId, city })
    .then((data) => {
        console.log(data)
        setCity("")
        setEditingCity(false)
        getAllCities(setMyCities)
    })
};

const deleteCity = (_id, setMyCities) => {
    axios.post(`${myURL}/deleteCity`, { _id })
    .then((data) => {
        console.log(data)
        getAllCities(setMyCities)
    })
};;

export { getAllCities, addCity, editCity, deleteCity };