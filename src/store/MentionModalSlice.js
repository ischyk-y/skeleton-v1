import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {},
    filter: { chat_id: null, message_id: null }
};

export const mentionModalSlice = createSlice({
    name: 'mentionModal',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setMentionModal: (state, action) => {
            state.data = action.payload;
        },
        setMentionModalFilter: (state, action) => {
            state.filter = action.payload;
        }
    }
});

export const { setMentionModal, setMentionModalFilter } = mentionModalSlice.actions;

export default mentionModalSlice.reducer;
