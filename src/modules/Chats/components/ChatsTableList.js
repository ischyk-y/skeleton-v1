import _  from 'lodash';

import axios from 'axios';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setChats, setFilter } from '../store/ChatsSlice';

import { useSearchParams } from 'react-router-dom';

import TableList from '../../../components/table/TableList';

const ChatsList = () => {
    const dispatch = useDispatch();
    const chats = useSelector(state => state.chats);

    const [searchParams, setSearchParams] = useSearchParams({page: 1});

    useEffect(() => {
        dispatch(setChats([]));

        setTimeout(() => {
            axios.get(`http://localhost:3001/chats?${new URLSearchParams(searchParams).toString()}`)
                .then((response) => {
                    dispatch(setChats(response.data.rows));
                });
        }, 100);
        // eslint-disable-next-line
    }, [searchParams])

    const handleSubmit = (e) => {
        e.preventDefault();

        const currentParams = Object.fromEntries(searchParams);

        const updatedParams = {
            ...currentParams,
            ...chats.filter,
        };

        for (const key in updatedParams) {
            if (updatedParams.hasOwnProperty(key) && updatedParams[key] === '') {
                delete updatedParams[key];
            }
        }

        const obj1 = Object.fromEntries(searchParams);
        const obj2 = updatedParams;

        const customizer = (objValue, othValue) => {
            if (typeof objValue !== typeof othValue) {
                return true;
            }
            return undefined;
        }

        if (!_.isEqualWith(obj1, obj2, customizer)) {
            setSearchParams(updatedParams);
        }
    }

    return (
        <div>
            <form className="my-4" onSubmit={handleSubmit}>
                <input type="text" onChange={e => dispatch(setFilter({key: 'title', value: e.target.value}))} />
                <input type="text" onChange={e => dispatch(setFilter({key: 'participants_count', value: e.target.value}))} />
                <input type="submit" />
            </form>

            <TableList name='chats'
                       payload={'230px calc(100% - 230px - 50px) 50px'}
                       rows={chats.rows}
            />
        </div>
    );
}

export default ChatsList;