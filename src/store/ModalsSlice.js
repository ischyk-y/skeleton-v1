import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mention: false,
    messageViewsModal: false
};

export const modalsSlice = createSlice({
    name: 'chats',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setModalState: (state, action) => {
            const { key, value } = action.payload;
            state[key] = value;
        }
    }
});

export const { setModalState } = modalsSlice.actions;

export default modalsSlice.reducer;
