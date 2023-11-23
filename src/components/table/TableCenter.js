import { EditText } from 'react-edit-text';
import 'react-edit-text/dist/index.css';

import { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Popover from 'react-bootstrap/Popover';

import ChatsTableCenter from '../../../../skelethon-v1/src/modules/Chats/components/ChatsTableCenter';
import MentionsTableCenter from '../../../../skelethon-v1/src/modules/Mentions/components/MentionsTableCenter';

const TableCenter = ({ name, rows, wasCalled, handleSubmit }) => {
    const [show, setShow] = useState({
        date: false,
        status: false
    });
    const [target, setTarget] = useState(null);
    const ref = useRef(null);

    const handleClick = (key) => (event) => {
        setShow(prevState => {
            const updatedState = { ...prevState };

            Object.keys(updatedState).forEach(stateKey => {
                updatedState[stateKey] = false;
            });

            updatedState[key] = !prevState[key];

            return updatedState;
        });
        setTarget(event.target);
    };

    let gridTemplateColumns;

    if (wasCalled === 'ads_tab') {
        gridTemplateColumns = '75px 50px 50px 150px 150px 150px';
    } else {
        gridTemplateColumns = '75px 50px 240px 50px 150px 150px 150px';
    }

    return (
        <div className="c-data-table__center-col">
            <div className="c-data-table__scroller c-data-table__scroller--left"></div>
            <div className="c-data-table__center-body">
                <div className="c-data-table__header-container">
                    {name === 'mentions' ?
                        <div className="c-data-table__center-header h-100">
                            <div
                                className="d-grid c-data-table__center-header-wrapper h-100"
                                style={{gridTemplateColumns: gridTemplateColumns}}
                            >
                                <div ref={ref} className="c-data-table__heading">
                                    <small onClick={handleClick('date')} className="opacity-50 d-flex justify-content-center w-100">
                                        Дата
                                    </small>

                                    <Overlay
                                        show={show.date}
                                        target={target}
                                        placement="bottom"
                                        container={ref}
                                        containerPadding={20}
                                    >
                                        <Popover id="popover-contained">
                                            <Popover.Header as="h3">Дата</Popover.Header>
                                            <Popover.Body>
                                                <div className="w-100 d-flex justify-content-center">
                                                    <EditText
                                                        type="text"
                                                        name="date"
                                                        onSave={handleSubmit}
                                                        className="c-data-table__filter"
                                                    />
                                                </div>
                                            </Popover.Body>
                                        </Popover>
                                    </Overlay>
                                </div>
                                <div className="c-data-table__heading">
                                    <small onClick={handleClick('status')} className="opacity-50 d-flex justify-content-center w-100">
                                        Стат..
                                    </small>

                                    <Overlay
                                        show={show.status}
                                        target={target}
                                        placement="bottom"
                                        container={ref}
                                        containerPadding={20}
                                    >
                                        <Popover id="popover-contained">
                                            <Popover.Header as="h3">Статус</Popover.Header>
                                            <Popover.Body>
                                                <div className="d-flex justify-content-center">
                                                    <EditText
                                                        type="text"
                                                        name="status"
                                                        onSave={handleSubmit}
                                                        className="c-data-table__filter"
                                                    />
                                                </div>
                                            </Popover.Body>
                                        </Popover>
                                    </Overlay>
                                </div>
                                {wasCalled !== 'ads_tab' ?
                                    <div className="c-data-table__heading">
                                        <small onClick={handleClick('message_chat_id')} className="opacity-50 d-flex justify-content-center w-100">
                                            Канал
                                        </small>

                                        <Overlay
                                            show={show.message_chat_id}
                                            target={target}
                                            placement="bottom"
                                            container={ref}
                                            containerPadding={20}
                                        >
                                            <Popover id="popover-contained">
                                                <Popover.Header as="h3">Канал</Popover.Header>
                                                <Popover.Body>
                                                    <div className="d-flex justify-content-center">
                                                        <EditText
                                                            type="text"
                                                            name="message_chat_id"
                                                            onSave={handleSubmit}
                                                            className="c-data-table__filter"
                                                        />
                                                    </div>
                                                </Popover.Body>
                                            </Popover>
                                        </Overlay>
                                    </div>
                                : null}
                                <div className="c-data-table__heading opacity-50 justify-content-center"><small>Згад..</small></div>
                                <div className="c-data-table__heading opacity-50"><small>Вартість реклами</small></div>
                                <div className="c-data-table__heading opacity-50"><small>Охоплення</small></div>
                                <div className="c-data-table__heading opacity-50"><small>CPM</small></div>
                            </div>
                        </div>
                        : null }
                </div>
                <div>
                    {rows ?
                        rows.length ?
                            rows.map((data, index) =>
                                <div key={index}>
                                    <div>
                                        {name === 'chats' ? <ChatsTableCenter data={ data } index={ index } /> : null}
                                        {name === 'mentions' ? <MentionsTableCenter data={ data } index={ index } wasCalled={ wasCalled }/> : null}
                                    </div>
                                </div>
                            )
                            : null
                        : null
                    }
                </div>
            </div>
            <div className="c-data-table__scroller c-data-table__scroller--right"></div>
        </div>
    );
}

export default TableCenter;