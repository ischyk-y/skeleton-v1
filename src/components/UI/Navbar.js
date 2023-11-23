import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { setUserValue } from '../../../../skelethon-v1/src/store/userSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);

    return (

        <nav className="navbar shadow-sm sticky-top bg-white">
            <div className="container-fluid">
                <Link to='/' className="navbar-brand">Navbar</Link>

                <span
                    className="btn"
                    onClick={() => dispatch(setUserValue({key: 'theme', value: user.data.theme === 'basic' ? 'dark' : 'basic'}))}>
                    Change Theme
                </span>
            </div>
        </nav>
    );
}

export default Navbar;