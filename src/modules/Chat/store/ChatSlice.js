import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    tab: 'general',
    data: null
};

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setChat: (state, action) => {
            state.data = action.payload;
        },
        setTab: (state, action) => {
            state.tab = action.payload;
        }
    }
});

export const { setChat, setTab } = chatSlice.actions;

export default chatSlice.reducer;
