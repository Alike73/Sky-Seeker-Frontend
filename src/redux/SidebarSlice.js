import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
    name: 'sidebarItems',

    initialState: {
        isOpen: false,

        showBtnGroup: false,


        isActiveIco: false,
        isActiveSidebar: false,
        selectedImageCategory: 'home',
    },
    reducers: {
        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
        },
        setShowBtnGroup: (state, action) => {
            state.showBtnGroup = action.payload;
        },
        setActiveIco: (state, action) => {
            state.isActiveIco = action.payload;
        },
        setIsActiveSidebar: (state, action) => {
            state.isActiveSidebar = action.payload;
        },
        filterImageCategory: (state, action) => {
            state.selectedImageCategory = action.payload;
        },
    },
    
});

export const getIsOpen = state => state.sidebarItems.isOpen;
export const getShowBtnGroup = state => state.sidebarItems.showBtnGroup;
export const getActiveIcon = state => state.sidebarItems.isActiveIco;
export const getActiveSidebar = state => state.sidebarItems.isActiveSidebar;
export const getSelectedImageCategory = state => state.sidebarItems.selectedImageCategory;

export const { setActiveIco, setIsActiveSidebar, setIsOpen, setShowBtnGroup, filterImageCategory } = sidebarSlice.actions;
export default sidebarSlice.reducer;