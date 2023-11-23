import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filter: {},
    rows: []
};

export const chatsSlice = createSlice({
    name: 'chats',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setChats: (state, action) => {
            state.rows = action.payload;
        },
        setFilter: (state, action) => {
            const { key, value } = action.payload;
            state.filter[key] = value;
        }
    }
});

export const { setChats, setFilter } = chatsSlice.actions;

export default chatsSlice.reducer;
