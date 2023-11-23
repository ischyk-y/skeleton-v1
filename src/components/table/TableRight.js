import ChatsTableRight from '../../../../skelethon-v1/src/modules/Chats/components/ChatsTableRight';
import MentionsTableRight from '../../../../skelethon-v1/src/modules/Mentions/components/MentionsTableRight';

const TableRight = ({ name, rows }) => {
    return (
        <div className="c-data-table__right-col">
            <div className="c-data-table__header-container">
                <div className="c-data-table__right-header h-100">
                    <div className="d-grid c-data-table__right-header-wrapper justify-content-center h-100">
                        {name === 'mentions' ?
                            <small className="c-data-table__heading opacity-50 text-center">Збере..</small>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
            <div className="c-data-table__right-body">
                {rows ?
                    rows.length ?
                        rows.map((data, index) =>
                            <div key={index} className="c-data-table__cell border-start-0 rounded-end-3">
                                {name === 'chats' ? <ChatsTableRight data={ data } /> : null}
                                {name === 'mentions' ? <MentionsTableRight data={ data } /> : null}
                            </div>
                        )
                        : null
                    : null
                }
            </div>
        </div>
    );
}

export default TableRight;