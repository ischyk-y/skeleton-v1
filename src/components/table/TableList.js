import TableLeft from './TableLeft';
import TableRight from './TableRight';
import TableCenter from './TableCenter';

const TableList = ({ name, payload, rows, wasCalled, handleSubmit }) => {
    return (
        <div>
            <div style={{ display: 'grid', gridTemplateColumns: payload }}>
                <TableLeft name={name} rows={rows} />
                <TableCenter
                    name={name}
                    rows={rows}
                    wasCalled={wasCalled}
                    handleSubmit={handleSubmit}
                />
                <TableRight name={name} rows={rows} />
            </div>

            {!rows ? 'Нічого не знайдено' : null}
            {rows && !rows.length ?
                <div>
                    <p className="placeholder-glow">
                        <span className="placeholder col-12"></span>
                    </p>
                </div>
                : null}

        </div>
    );
}

export default TableList;