const ChatsTableCenter = ({ data }) => {
    return (
        <div className="d-grid" style={{gridTemplateColumns: '120px 120px 120px'}}>
            <div className="c-data-table__cell border-end-0">
                {data.participants_count}
            </div>
            <div className="c-data-table__cell border-end-0">
                {data['stats'].length > 0 ? data['stats'][0]['views'] : null}
            </div>
            <div className="c-data-table__cell">
                {data['stats'].length > 1 ? data['stats'][1]['views'] : null}
            </div>
        </div>
    );
}

export default ChatsTableCenter;