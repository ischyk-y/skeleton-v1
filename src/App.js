import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { ThemeProvider } from 'styled-components';
import { BASIC, DARK } from './themes';

import Navbar from './components/UI/Navbar';

import Chats from './pages/Chats';
import Chat from './pages/Chat';
import Mentions from './pages/Mentions';

import './App.css';
import GlobalStyles from './styles';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';

const App = () => {
    const user = useSelector(state => state.user);

    return (
        <ThemeProvider theme={ user.data.theme === 'basic' ? BASIC : DARK }>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Chats />} />
                    <Route path="/mentions" element={<Mentions />} />
                    <Route path="/chats/:peer" element={<Chat tab="general" />} />
                    <Route path="/chats/:peer/ads" element={<Chat tab="ads" />} />
                    <Route path="/chats/:peer/mentions" element={<Chat tab="mentions" />} />
                </Routes>
            </Router>
            <GlobalStyles />
        </ThemeProvider>
    )
}

export default App;