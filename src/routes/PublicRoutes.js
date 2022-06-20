import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Nosotros from '../components/Nosotros';
import News from '../components/News';
import NotFound from '../components/NotFound';
import Login from '../components/Login';


const PublicRoutes = () => {
    return (
        <Routes>
            <Route exact match path='' element={<Home/>} />
            <Route exact path='about' element={<Nosotros/>} />
            <Route path='news' element={<News/>} />
            <Route path='testimonials' element={<News/>} />
            <Route path='contact' element={<News/>} />
            <Route path='contributes' element={<News/>} />
            <Route path='login' element={<Login/>} />
            <Route path='*' element={<NotFound/>} />
        </Routes>
    );
}

export default PublicRoutes;