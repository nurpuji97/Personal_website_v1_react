import Footer from '../Component/Footer/footer';
import Navbar from '../Component/Navbar/navbar';
import { Route, Routes } from 'react-router-dom';

import './layout.css';
import Home from './Home/home';

export default function layout(){
    return (

        <div className="container">
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    
                </Routes>
            </main>
            <Footer />
        </div>
    );
}