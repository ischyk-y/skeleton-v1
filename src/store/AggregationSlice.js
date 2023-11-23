import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {
        mentions: {},
        ads: {}
    }
};

export const aggregationSlice = createSlice({
    name: 'aggregation',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setAggregation: (state, action) => {
            const { wasCalled, payload } = action.payload
            state.data[wasCalled] = payload;
        },
        setAggregationValue: (state, action) => {
            const { wasCalled, key, value } = action.payload;
            state.data[wasCalled][key] = value;
        }
    }
});

export const { setAggregation, setAggregationValue } = aggregationSlice.actions;

export default aggregationSlice.reducer;
