import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    trigger: true,
    filter: { page: 1 },
    rows: []
};

export const mentionsSlice = createSlice({
    name: 'chats',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setTrigger: (state) => {
            state.trigger = !state.trigger;
        },
        setMentions: (state, action) => {
            state.rows = action.payload;
        },
        setFilter: (state, action) => {
            const { key, value } = action.payload;
            state.filter[key] = value;
        },
        setMentionValue: (state, action) => {
            const { index, key, value } = action.payload;
            if (state.rows[index]) {
                state.rows[index][key] = value;
            }
        },
    }
});

export const { setMentions, setFilter, setMentionValue, setTrigger } = mentionsSlice.actions;

export default mentionsSlice.reducer;
