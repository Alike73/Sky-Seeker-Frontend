
import { configureStore } from '@reduxjs/toolkit';
import sidebarItems from './SidebarSlice';

export default configureStore({
    reducer: {
        sidebarItems,
    }
});