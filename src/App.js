import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import FormPage from './Pages/FormPage';
import Home from './Pages/Home';

function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />

    <Route path="/form" element={<FormPage />} />
    </Routes>
    </>
  );
}

export default App;
