import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

import { useDispatch } from 'react-redux';
import { setMentionValue } from '../store/MentionsSlice';

import { setTrigger } from '../store/MentionsSlice';

import axios from 'axios';

const MentionsTableCenter = ({ data, index, wasCalled }) => {
    const dispatch = useDispatch();

    const handleChange = (value) => {
        dispatch(setMentionValue({ index, key: 'cost', value }))
    }

    const handleSave = ({ value }) => {
        const cost = parseInt(value);

        axios.post(`http://localhost:3001/mentions/${data.id}`,
            {
                cost: cost
            })
            .then(response => {
                if (response.data.ok) {
                    dispatch(setTrigger());
                    dispatch(setMentionValue({index, key: 'cpa', value: response.data.result.cpa}))
                }
            });
    };

    const formatDateTime = (dateString) => {
        const date = new Date(dateString);
        const formattedTime = `${date.getHours()}:${String(date.getMinutes()).padStart(2, '0')}`;
        const formattedDate = `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear().toString().slice(-2)}`;
        return (
            <div>
                <div className="opacity-75">{formattedTime}</div>
                <div>{formattedDate}</div>
            </div>
        );
    }

    let gridTemplateColumns;

    if (wasCalled === 'ads_tab') {
        gridTemplateColumns = '75px 50px 50px 150px 150px 150px';
    } else {
        gridTemplateColumns = '75px 50px 240px 50px 150px 150px 150px';
    }

    return (
        <div className="d-grid" style={{gridTemplateColumns: gridTemplateColumns}}>
            <div className="c-data-table__cell border-end-0 justify-content-center">
                <small>{formatDateTime(data.message.date)}</small>
            </div>
            <div className="c-data-table__cell border-end-0 justify-content-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.87868 10.1213L14.1213 14.364M9.87868 14.364L14.1213 10.1213M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#FF3055" stroke-width="2.4" stroke-linecap="round"/>
                </svg>
            </div>
            {wasCalled !== 'ads_tab' ?
                <div className="c-data-table__cell border-end-0 ps-2">
                    <div className="d-flex align-items-center gap-2">
                        <img
                            alt=''
                            width="32"
                            className="rounded-circle"
                            src={`http://157.90.125.50/profile_photos/${data.chat.tg_id}.jpg`}
                        />
                        <span className="opacity-75">{data.chat.title}</span>
                    </div>
                </div>
                : null
            }
            <div className="c-data-table__cell border-end-0 justify-content-center">
                <span className="badge rounded-pill text-secondary">{data.mention_count}</span>
            </div>
            <div className="c-data-table__cell border-end-0 px-2">
                <EditText
                    className="rounded-2 px-2"
                    onChange={e => handleChange(e.target.value)}
                    onSave={handleSave}
                    value={data.cost}
                />
            </div>
            <div className="c-data-table__cell border-end-0 px-3">
                {data.message.views.toLocaleString()}
            </div>
            <div className="c-data-table__cell px-3">
                {data.cost && data.message.views ?
                    parseInt(data.cost / data.message.views * 1000)
                : '-'}
            </div>
        </div>
    );
}

export default MentionsTableCenter;