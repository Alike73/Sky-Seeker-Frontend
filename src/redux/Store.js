
import { configureStore } from '@reduxjs/toolkit';
import sidebarItems from './SidebarSlice';
import weatherItems from './WeatherSlice';

export default configureStore({
    reducer: {
        sidebarItems,
        weatherItems
    }
});