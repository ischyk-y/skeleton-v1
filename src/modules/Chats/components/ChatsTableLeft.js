import { Link } from 'react-router-dom';

const ChatsTableLeft = ({ data }) => {
    return (
        <div>
            <div style={{fontFamily: 'Proxima Nova Rg'}} className="d-flex gap-2 align-items-center px-2">
                <div>
                    <input className="form-check-input flex-shrink-0" type="checkbox" value="" />
                </div>
                <div>
                    <img
                        width="32"
                        className="rounded-circle"
                        src={`http://157.90.125.50/profile_photos/${data.tg_id}.jpg`}
                        alt=""
                    />
                </div>
                <div className="opacity-75">
                    <Link
                        to={`/chats/${data.peer}`}
                        style={{whiteSpace: 'nowrap', overflow: 'hidden'}}
                        className="text-decoration-none"
                    >
                        {data.title}
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ChatsTableLeft;