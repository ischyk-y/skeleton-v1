import LocalizedStrings from 'react-localization';

import MentionsTableList from '../../../Mentions/components/MentionsTableList';
import Aggregation from '../../../../components/UI/Aggregation';

import { useSearchParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAggregation } from '../../../../store/AggregationSlice';

import axios from 'axios';

const MentionsTab = ({ chat_id }) => {
    const dispatch = useDispatch();
    const aggregation = useSelector(state => state.aggregation);
    const mentions = useSelector(state => state.mentions);

    const [isLoading, setIsLoading] = useState(true);
    const [searchParams,] = useSearchParams();

    useEffect(() => {
        if (isLoading) {
            setIsLoading(false);
        }
        // eslint-disable-next-line
    }, []);

    const formatNumberWithCommas = (number) => {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    useEffect(() => {
        if (!isLoading) {
            dispatch(setAggregation({wasCalled: 'mentions', payload: {}}));
            dispatch(setAggregation({wasCalled: 'ads', payload: {}}));

            const updatedParams = {
                ...{ chat_id: chat_id },
                ...Object.fromEntries(searchParams)
            }
            axios.get(`http://localhost:3001/mentions/aggregation?${new URLSearchParams(updatedParams).toString()}`,)
                .then((response) => {
                    response.data['views'] = response.data['views'] ? formatNumberWithCommas(response.data['views']) : '-'
                    dispatch(setAggregation({wasCalled: 'mentions', payload: response.data}));
                });
        }
        // eslint-disable-next-line
    }, [mentions.trigger]);

    let strings = new LocalizedStrings({
        ua: {
            aggregation_headings: {
                count: 'знайдено',
                views: 'охоплення',
                cost: 'бюджет',
                cpm: 'нових підписників',
                cpa: 'ціна підписки'
            }
        },
        ru: {
            aggregation_headings: {
                count: 'знайдено',
                views: 'охоплення',
                cost: 'бюджет',
                cpm: 'нових підписників',
                cpa: 'ціна підписки'
            }
        }
    });

    const [aggregationIcons,] = useState({
        count:
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0607 16.9394C19.4749 16.3536 18.5252 16.3536 17.9394 16.9394C17.3536 17.5252 17.3536 18.475 17.9394 19.0607L20.0607 16.9394ZM21.9393 23.0607C22.5251 23.6465 23.4748 23.6465 24.0606 23.0607C24.6464 22.4749 24.6464 21.5252 24.0606 20.9394L21.9393 23.0607ZM17.9394 19.0607L21.9393 23.0607L24.0606 20.9394L20.0607 16.9394L17.9394 19.0607ZM11 17.5C6.85786 17.5 3.5 14.1421 3.5 10H0.5C0.5 15.799 5.20101 20.5 11 20.5V17.5ZM18.5 10C18.5 14.1421 15.1421 17.5 11 17.5V20.5C16.799 20.5 21.5 15.799 21.5 10H18.5ZM11 2.5C15.1421 2.5 18.5 5.85786 18.5 10H21.5C21.5 4.20101 16.799 -0.5 11 -0.5V2.5ZM11 -0.5C5.20101 -0.5 0.5 4.20101 0.5 10H3.5C3.5 5.85786 6.85786 2.5 11 2.5V-0.5Z" fill="#2489FF"/>
            </svg>
        ,
        cost: null
        ,
        views: null,
        cpm: null,
        newMembersAvgCount: null,
        cpa: null
    });

    return (
        <div>
            <div className="my-4">
                <Aggregation
                    aggregation_icons={ aggregationIcons }
                    aggregation_headings={ strings.aggregation_headings }
                    rows={ aggregation.data.mentions }
                />
            </div>

            {chat_id ? <MentionsTableList wasCalled="mentions_tab" chat_id={chat_id} /> : null}
        </div>
    );
}

export default MentionsTab;