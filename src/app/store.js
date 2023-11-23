import { configureStore } from '@reduxjs/toolkit';
import chatsReducer from '../modules/Chats/store/ChatsSlice';
import chatReducer from '../modules/Chat/store/ChatSlice';
import growthReducer from '../modules/Chat/store/GrowthSlice';
import mentionsReducer from '../modules/Mentions/store/MentionsSlice';
import aggregationReducer from '../store/AggregationSlice';
import modalReducer from '../store/ModalsSlice';
import mentionModalReducer from '../store/MentionModalSlice';
import userReducer from '../store/userSlice';

export const store = configureStore({
    reducer: {
        chats: chatsReducer,
        chat: chatReducer,
        growth: growthReducer,
        mentions: mentionsReducer,
        aggregation: aggregationReducer,
        modal: modalReducer,
        mentionModal: mentionModalReducer,
        user: userReducer
    },
});
