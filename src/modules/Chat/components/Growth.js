const Growth = (rows) => {
    return (
        <div>
            {rows.rows ?
                rows.rows.map((data, index) =>
                    <div className="c-data__growth p-3 rounded-4" key={index}>
                        {data.date}
                        {data.participants_count}
                    </div>
                )
                : null
            }
        </div>
    );
}

export default Growth;