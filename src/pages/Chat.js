import { useParams, Link } from 'react-router-dom';

import axios from 'axios';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setChat, setTab } from '../modules/Chat/store/ChatSlice';
import { setMentions } from '../modules/Mentions/store/MentionsSlice';

import GeneralTab from '../modules/Chat/components/tabs/GeneralTab';
import AdsTab from '../modules/Chat/components/tabs/AdsTab';
import MentionsTab from '../modules/Chat/components/tabs/MentionsTab';

const Chat = ({ tab }) => {
    const { peer } = useParams();

    const dispatch = useDispatch();
    const chat = useSelector(state => state.chat);

    useEffect(() => {
        dispatch(setTab(tab));
    }, [tab, dispatch]);

    useEffect(() => {
        dispatch(setChat(null));

        setTimeout(() => {
            axios.get(`http://localhost:3001/chats/${peer}`)
                .then((response) => {
                    dispatch(setChat(response.data.result));
                });
        }, 100);
    }, [dispatch, peer]);

    return (
        <div className="px-4">
            {chat.data ?
                <div>
                    <div className="mt-4 d-flex align-items-center gap-3">
                        <img width="60" className="rounded-circle" alt="" src={`http://157.90.125.50/profile_photos/${chat.data.tg_id}.jpg`} />
                        <h4 className="m-0 modal-title">{chat.data.title}</h4>
                        <span>{chat.data.participants_count} подписчиков</span>
                        <span>23 952 охват</span>
                    </div>

                    <div className="d-flex gap-3 mt-4">
                        <Link to={`/chats/${peer}`} className="text-decoration-none">Головна</Link>
                        <Link onClick={() => dispatch(setMentions([]))} to={`/chats/${peer}/ads`} className="text-decoration-none">Реклама</Link>
                        <Link onClick={() => dispatch(setMentions([]))} to={`/chats/${peer}/mentions`} className="text-decoration-none">Згадки</Link>
                    </div>

                    {chat.tab === 'general' ? <GeneralTab chat={chat} /> : null}
                    {chat.tab === 'ads' ? <AdsTab chat_id={chat.data.id} /> : null}
                    {chat.tab === 'mentions' ? <MentionsTab currentTab={tab} chat_id={chat.data.id} /> : null}
                </div>
            :
                <p className="placeholder-glow opacity-25 mt-4">
                    <span className="placeholder col-12 rounded-5"></span>
                </p>
            }
        </div>
    );
}

export default Chat;