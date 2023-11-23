import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

import { useSelector, useDispatch } from 'react-redux';
import { setModalState } from '../../../../../skelethon-v1/src/store/ModalsSlice';

// import axios from 'axios';

const MessageViewsModal = () => {
    const dispatch = useDispatch();

    const show = useSelector(state => state.modal);
    const mentionModal = useSelector(state => state.mentionModal);

    const handleClose = () => {
        dispatch(setModalState({key: 'mention', value: true}));
        dispatch(setModalState({key: 'messageViewsModal', value: false}));
    }

    console.log(mentionModal.data && mentionModal.data.stats ? Object.values(mentionModal.data.stats.views).flatMap(subArray => subArray[1]) : [])

    const options = {
        title: { text: '' },
        chart: {
            type: 'column',
            height: 230
        },
        plotOptions: {
            column: {
                color: '#3a4545' // Колір підводки графіка
            }
        },
        legend: {
            enabled: false // Вимкнути легенду
        },
        yAxis: {
            title: { text: '' }, // Встановити порожній заголовок осі X
            gridLineColor: '#f7f7f7'
        },
        xAxis: {
            title: { text: '' }, // Встановити порожній заголовок осі X
            tickColor: '#f7f7f7'
        },
        series: [{
            data: mentionModal.data && mentionModal.data.stats ? Object.values(mentionModal.data.stats.views).flatMap(subArray => subArray[1]) : [],
            pointWidth: 12,
            minorTickInterval: 0.5
        }]
    }

    return (
        <Modal
            show={show.messageViewsModal}
            onHide={handleClose}
            animation={false}
            scrollable={true}
            contentClassName="border-0 rounded-2"
            centered
        >
            <Modal.Header className="border-0">
                <Modal.Title><b>Охоплення:</b></Modal.Title>
            </Modal.Header>
            <Modal.Body style={{ whiteSpace: 'pre-line' }}>
                <div>
                    <div className="mb-3">
                        <HighchartsReact
                            highcharts={Highcharts}
                            options={options}
                        />
                    </div>
                    <div>
                        {mentionModal.data && mentionModal.data.stats &&
                            Object.keys(mentionModal.data.stats.views).map(data => {
                                return (
                                    <div key={data} className="d-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                                        <div>{data}</div>
                                        <div>{mentionModal.data.stats.views[data][0]}</div>
                                        <div>{mentionModal.data.stats.views[data][1]}</div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer className="border-top-0">
                <Button variant="light" onClick={handleClose}>
                    Закрити
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MessageViewsModal;