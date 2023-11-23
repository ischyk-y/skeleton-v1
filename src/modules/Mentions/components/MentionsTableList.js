import _  from 'lodash';

import axios from 'axios';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMentions, setFilter, setTrigger } from '../store/MentionsSlice';

import { useSearchParams } from 'react-router-dom';

import TableList from '../../../components/table/TableList';

import MentionModal from '../../../components/UI/modals/MentionModal';

const MentionsTableList = ({ wasCalled, chat_id, message_chat_id }) => {
    const dispatch = useDispatch();
    const mentions = useSelector(state => state.mentions);

    const defaultParams = { page: 1 }
    if (chat_id !== undefined) { defaultParams['chat_id'] = chat_id; }
    if (message_chat_id !== undefined) { defaultParams['message_chat_id'] = message_chat_id; }

    const [searchParams, setSearchParams] = useSearchParams();

    const [isLoading, setIsLoading] = useState(true);
    const [initialRequest, setInitialRequest] = useState(true);

    useEffect(() => {
        if (isLoading) {
            setInitialRequest(!initialRequest);
            setIsLoading(false);
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!isLoading) {
            setInitialRequest(!initialRequest);
        }
        // eslint-disable-next-line
    }, [searchParams]);

    useEffect(() => {
        if (!isLoading) {
            dispatch(setMentions([]));

            const updatedParams = {
                ...defaultParams,
                ...Object.fromEntries(searchParams)
            };

            setTimeout(() => {
                axios.get(`http://localhost:3001/mentions?${new URLSearchParams(updatedParams).toString()}`)
                    .then((response) => {
                        if (response.data.rows.length === 0) {
                            dispatch(setMentions(null));
                        } else {
                            dispatch(setMentions(response.data.rows));
                        }
                    });
            }, 100);
            dispatch(setTrigger());
        }
        // eslint-disable-next-line
    }, [initialRequest]);

    const handleSubmit = ({name, value}) => {
        console.log(name, value)

        dispatch(setFilter({key: name, value: value}));

        const updatedParams = {
            ...Object.fromEntries(searchParams),
            ...mentions.filter,
            ...defaultParams,
            ...{[name]: value}
        };

        for (const key in updatedParams) {
            if (updatedParams[key] === '') {
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
            <MentionModal />

            <TableList
                name="mentions"
                payload={'50px calc(100% - 50px - 50px) 50px'}
                rows={mentions.rows}
                wasCalled={wasCalled}
                handleSubmit={handleSubmit}
            />

        </div>
    );
}

export default MentionsTableList;