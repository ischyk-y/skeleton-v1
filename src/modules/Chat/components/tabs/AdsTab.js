import LocalizedStrings from 'react-localization';

import MentionsTableList from '../../../Mentions/components/MentionsTableList';
import Aggregation from '../../../../components/UI/Aggregation';

import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAggregation, setAggregationValue } from '../../../../store/AggregationSlice';


const AdsTab = ({ chat_id }) => {
    const dispatch = useDispatch();
    const chat = useSelector(state => state.chat);
    const aggregation = useSelector(state => state.aggregation);
    const trigger = useSelector(state => state.mentions.trigger);

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (isLoading) {
            setIsLoading(false);
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        dispatch(setAggregation({wasCalled: 'mentions', payload: {}}));
        dispatch(setAggregation({wasCalled: 'ads', payload: {}}));
        if (!isLoading) {
            setTimeout(() => {
                dispatch(setAggregation({wasCalled: 'ads', payload: {count: 3, cost: '8 500', cpm: '120', newMembersAvgCount: '2 435', cpa: '23'}}))
                dispatch(setAggregationValue({ wasCalled: 'ads', key: 'views', value:  (chat.data['stats'].length > 0) ? chat.data['stats'][0]['views'] : '-'}))
            }, 100);
        }
        // eslint-disable-next-line
    }, [trigger]);

    let strings = new LocalizedStrings({
        ua: {
            aggregation_headings: {
                count: 'знайдено',
                cost: 'ціна реклами',
                views: 'охоплення',
                cpm: 'CPM',
                newMembersAvgCount: 'нових підписників',
                cpa: 'ціна підписника'
            }
        },
        ru: {
            aggregation_headings: {
                count: 'найдено',
                cost: 'цена рекламы',
                views: 'охват',
                cpm: 'CPM',
                newMembersAvgCount: 'новых подписчиков',
                cpa: 'цена подписчика'
            }
        }
    });

    const [aggregationIcons,] = useState({
        count:
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.0607 16.9394C19.4749 16.3536 18.5252 16.3536 17.9394 16.9394C17.3536 17.5252 17.3536 18.475 17.9394 19.0607L20.0607 16.9394ZM21.9393 23.0607C22.5251 23.6465 23.4748 23.6465 24.0606 23.0607C24.6464 22.4749 24.6464 21.5252 24.0606 20.9394L21.9393 23.0607ZM17.9394 19.0607L21.9393 23.0607L24.0606 20.9394L20.0607 16.9394L17.9394 19.0607ZM11 17.5C6.85786 17.5 3.5 14.1421 3.5 10H0.5C0.5 15.799 5.20101 20.5 11 20.5V17.5ZM18.5 10C18.5 14.1421 15.1421 17.5 11 17.5V20.5C16.799 20.5 21.5 15.799 21.5 10H18.5ZM11 2.5C15.1421 2.5 18.5 5.85786 18.5 10H21.5C21.5 4.20101 16.799 -0.5 11 -0.5V2.5ZM11 -0.5C5.20101 -0.5 0.5 4.20101 0.5 10H3.5C3.5 5.85786 6.85786 2.5 11 2.5V-0.5Z" fill="#2489FF"/>
            </svg>,
        cost: null,
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
                    rows={ aggregation.data.ads }
                />
            </div>
            {chat_id ? <MentionsTableList wasCalled="ads_tab" message_chat_id={chat_id} /> : null}
        </div>
    );
}

export default AdsTab;