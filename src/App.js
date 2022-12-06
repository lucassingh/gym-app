import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material'
import { Footer, Navbar } from './components';
import { ExcerciseDetail, Home } from './pages';

function App() {
    return (
        <Box width='400px' sx={{width: {xl:'1488px'}}} m='auto'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/exercise/:id' element={<ExcerciseDetail />} />
            </Routes>
            <Footer />
        </Box>
    );
}

export default App;
