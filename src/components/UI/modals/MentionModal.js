import MessageViewsModal from './MessageViewsModal';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setModalState } from '../../../../../skelethon-v1/src/store/ModalsSlice';
import { setMentionModal } from '../../../../../skelethon-v1/src/store/MentionModalSlice';

import axios from 'axios';

const MentionModal = () => {
    const dispatch = useDispatch();

    const show = useSelector(state => state.modal);
    const mentionModal = useSelector(state => state.mentionModal);

    useEffect(() => {
        dispatch(setMentionModal(null));

        if (show.mention) {
            const filter = mentionModal.filter;
            axios.get(`http://localhost:3001/messages/${filter.message_id}`,
                {params: {chat_id: filter.chat_id}})
                .then((response) => {
                    dispatch(setMentionModal(response.data.result));
                });

        }
        // eslint-disable-next-line
    }, [mentionModal.filter]);

    const handleClose = () => {
        dispatch(setModalState({key: 'mention', value: false}));
    }

    const handleViewsModal = () => {
        dispatch(setModalState({key: 'mention', value: false}));
        dispatch(setModalState({key: 'messageViewsModal', value: true}));
    }

    return (
        <div>
            <MessageViewsModal />

            <Modal
                show={show.mention}
                onHide={handleClose}
                animation={false}
                scrollable={true}
                contentClassName="border-0 rounded-2"
                centered
            >
                <Modal.Header className="border-0">
                    <Modal.Title><b>Згадка:</b></Modal.Title>
                </Modal.Header>
                <Modal.Body style={{ whiteSpace: 'pre-line' }}>
                    {mentionModal.data ?
                        mentionModal.data.text
                        :
                        <p className="placeholder-glow opacity-25 m-0">
                            <span className="placeholder col-12 rounded-5"></span>
                        </p>
                    }

                    {mentionModal.data ?
                        mentionModal.data.media ?
                            mentionModal.data.media['_'] === 'MessageMediaPhoto' ?
                                <img
                                    className="w-100 rounded-3 mt-3"
                                    src={`http://157.90.125.50/media/photos/${mentionModal.data.media.photo.id}.webp`}
                                    alt="" />
                                : null
                            : null
                        : null
                    }

                    {mentionModal.data ?
                        mentionModal.data.reply_markup ?
                            mentionModal.data.reply_markup['_'] === 'ReplyInlineMarkup' ?
                                <div>{mentionModal.data.reply_markup['rows'][0]['buttons'][0]['text']}</div>
                                : null
                            : null
                        : null
                    }

                </Modal.Body>
                <Modal.Footer className="border-top-0">
                    <Button variant="light" onClick={handleViewsModal}>
                        Охоплення
                    </Button>
                    <Button variant="light" onClick={handleClose}>
                        Закрити
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default MentionModal;