import ChatsTableLeft from '../../../../skelethon-v1/src/modules/Chats/components/ChatsTableLeft';
import MentionsTableLeft from '../../../../skelethon-v1/src/modules/Mentions/components/MentionsTableLeft';

const TableLeft = ({ name, rows }) => {
    return (
        <div className="c-data-table__left-col">
            <div className="c-data-table__header-container">
                <div className="c-data-table__left-header h-100">
                    <div className="d-grid c-data-table__left-header-wrapper justify-content-center h-100">
                        {name === 'mentions' ?
                            <small className="c-data-table__heading opacity-50 text-center">Пост</small>
                            :
                            null
                        }
                    </div>
                </div>
            </div>
            <div className="c-data-table__left-body">
                {rows ?
                    rows.length ?
                        rows.map((data, index) =>
                            <div key={index} className="c-data-table__cell border-end-0 rounded-start-3">
                                {name === 'chats' ? <ChatsTableLeft data={data} index={index} /> : null}
                                {name === 'mentions' ? <MentionsTableLeft data={data} index={index} /> : null}
                            </div>
                        )
                        : null
                    : null
                }
            </div>
        </div>
    );
}

export default TableLeft;