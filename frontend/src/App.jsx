import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from "./components/common/Header";

import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import HomePage from './pages/dashboard/HomePage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="auth/login" element={<LoginPage />} />
        <Route path="auth/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;