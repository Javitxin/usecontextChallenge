import  {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTheme } from '../themes/ThemeContext.jsx';
import Home from '../pages/Home.jsx';
import Profile from '../pages/Profile.jsx';
import MyJob from '../pages/MyJob.jsx';
import Button from '../components/Button.jsx';

const RoutesApp = () => {
    const {theme} = useTheme();
    return(
        <Router>
            <section className={`App ${theme}`}>
                <div className='content'>
                    <header className='App-header'>
                        <nav>
                            <Link to='/'>Home</Link>
                            <Link to='/profile'>Profile</Link>
                            <Link to='/myjob'>MyJob</Link>
                        </nav>
                        <Button />
                    </header>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/myjob' element={<MyJob />} />
                    </Routes>
                </div>
            </section>
        </Router>
    );
};
export default RoutesApp;