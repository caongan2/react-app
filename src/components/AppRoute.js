import Home from './Home';
import About from './About';
import Contact from './Contact';
import ContactDetail from './ContactDetail';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Auth/Login';

const AppRoute = () => {
    return (
        <Router>
            <Sidebar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact/:id" element={<ContactDetail />} />
            </Routes>
        </Router>
    );
}

export default AppRoute;