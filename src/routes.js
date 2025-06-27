import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Sobre from './pages/Sobre';
import Footer from './components/Footer';
import Contatos from './pages/Contatos';  // Apenas uma vez aqui

function RoutesApp() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/Sobre' element={<Sobre />} />
                <Route path='/Contatos' element={<Contatos />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}

export default RoutesApp;
