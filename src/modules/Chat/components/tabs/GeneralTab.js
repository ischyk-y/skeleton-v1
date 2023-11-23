import axios from 'axios';

import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setGrowth } from '../../store/GrowthSlice';

import Growth from '../Growth';

const GeneralTab = ({ chat }) => {
    const dispatch = useDispatch();
    const growth = useSelector(state => state.growth);

    useEffect(() => {
        axios.get(`http://localhost:3001/growth`, {params: {chat_id: chat.data.id}})
            .then((response) => {
                dispatch(setGrowth(response.data.rows))
            });
    }, [dispatch, chat.data.id]);

    return (
        <div>
            <div className="my-4">Основна вкладка каналу <b>{chat.data.title}</b></div>

            <div className="rounded-4 p-3 mb-4" style={{ maxWidth: '600px', whiteSpace: 'pre-wrap', background: '#1d1d1d'}}>
                {chat.data.about ? chat.data.about[0].about : null}
            </div>

            <Growth rows={ growth.rows } />
        </div>
    );
}

export default GeneralTab;