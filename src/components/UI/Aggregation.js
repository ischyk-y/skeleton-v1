import { FiSettings } from '@react-icons/all-files/fi/FiSettings';

const Aggregation = ({ aggregation_icons, aggregation_headings, rows }) => {
    return (
        <div>
            <div className="d-grid c-aggregation opacity-75 rounded-3" style={{gridTemplateColumns: '1fr 50px'}}>
                <div className="d-grid overflow-x-scroll rounded-3" style={{gridTemplateColumns: 'repeat(6, 1fr)'}}>
                    {Object.keys(aggregation_headings).map((data, index) =>
                        <div key={index} className="c-aggregation__row px-3 py-2">
                            <h5 className="modal-title m-0">
                                {rows[data] ?
                                    <div className="d-flex align-items-center gap-2">
                                        {aggregation_icons[data]}
                                        {rows[data]}
                                    </div>
                                    :
                                        <div className="spinner-grow spinner-grow-sm opacity-25" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </div>
                                }
                            </h5>
                            <div className="opacity-50"><small>{aggregation_headings[data]}</small></div>
                        </div>
                    )}
                </div>
                <div className="c-aggregation__right-row d-flex align-items-center justify-content-center">
                    <FiSettings />
                </div>
            </div>
        </div>
    );
}

export default Aggregation;