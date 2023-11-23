import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    rows: null
};

export const growthSlice = createSlice({
    name: 'growth',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setGrowth: (state, action) => {
            state.rows = action.payload;
        }
    }
});

export const { setGrowth } = growthSlice.actions;

export default growthSlice.reducer;
