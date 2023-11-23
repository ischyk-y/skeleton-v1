import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {
        theme: 'basic'
    }
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setUserValue: (state, action) => {
            const { key, value } = action.payload
            state.data[key] = value;
        }
    }
});

export const { setUserValue } = userSlice.actions;

export default userSlice.reducer;
