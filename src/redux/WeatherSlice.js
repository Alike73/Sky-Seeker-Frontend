
import { createSlice } from '@reduxjs/toolkit';

export const weatherSlice = createSlice({
    name: 'weatherItems',

    initialState: {
        city: "New York",
        myCity: "",
        units: true
    },
    reducers: {
        setCity: (state, action) => {
            state.city = action.payload;
        },
        setMyCity: (state, action) => {
            state.myCity = action.payload;
        },
        setUnits: (state, action) => {
            state.units = action.payload;
        },
    },
    
});

export const getCity = state => state.weatherItems.city;
export const getMyCity = state => state.weatherItems.myCity;
export const getUnits = state => state.weatherItems.units;

export const { setCity, setMyCity, setUnits } = weatherSlice.actions;
export default weatherSlice.reducer;