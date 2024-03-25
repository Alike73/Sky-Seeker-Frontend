import { createSlice } from '@reduxjs/toolkit';

export const sidebarSlice = createSlice({
    name: 'sidebarItems',

    initialState: {
        isOpen: false,
        showBtnGroup: false,
    },
    reducers: {
        setIsOpen: (state, action) => {
            state.isOpen = action.payload;
        },
        setShowBtnGroup: (state, action) => {
            state.showBtnGroup = action.payload;
        }
    },
    
});

export const getIsOpen = state => state.sidebarItems.isOpen;
export const getShowBtnGroup = state => state.sidebarItems.showBtnGroup;

export const { setIsOpen, setShowBtnGroup } = sidebarSlice.actions;
export default sidebarSlice.reducer;