import { useDispatch } from 'react-redux';
import { setModalState } from '../../../store/ModalsSlice';
import { setMentionModalFilter } from '../../../store/MentionModalSlice';

const MentionsTableLeft = ({ data, index }) => {
    const dispatch = useDispatch();

    const handleShow = () => {
        dispatch(setModalState({key: 'mention', value: true}));
        dispatch(setMentionModalFilter({ chat_id: data.chat.id, message_id: data.message.id }));
    }

    const imgs = [
        'https://static22.tgcnt.ru/posts/_0/5c/5c2217f5b7324b60c8bb93a2c418fd86.jpg',
        'https://static20.tgcnt.ru/posts/_0/44/44db60f090b0aab2a0a51f617ca82756.jpg',
        'https://static21.tgcnt.ru/posts/_0/6d/6d2fb0fcb9afaac7183be44ee1e9e8ab.jpg',
        'https://static23.tgcnt.ru/posts/_0/13/13b1c34ba6c238c1f03cdc7b9f70f9be.jpg',
        'https://static23.tgcnt.ru/posts/_0/22/228d9ebc3d27869378d97a961b33f840.jpg',
        'https://static17.tgcnt.ru/posts/_0/06/06766f120becf7b553ddfa5fa558c84a.jpg'
    ];

    return (
        <div onClick={handleShow}>
            <div className="c-img-wrap rounded-1 mx-2 bg-light">
                <img
                    src={imgs[index]}
                    alt=""
                />
            </div>
            {data.message.media ?
                <div>
                    {data.message.media['_'] === 'MessageMediaPhoto' ?
                        <div>
                        </div> : null}
                </div> : null}
        </div>
    );
}

export default MentionsTableLeft;