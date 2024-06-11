import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet  } from 'react-router-dom';
import './App.css';
import LoginPage from './pages/LoginPage/LoginPage';
import MainPage from './pages/MainPage/MainPage';
import SchedulePage from './pages/SchedulePage/SchedulePage';
import TopNavbar from './components/TopNavbar/TopNavbar';
import SideNavbar from './components/SideNavbar/SideNavbar';
import ProtectedRouter from './components/ProtectedRouter/ProtectedRouter';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage ';

const Layout = () => {
  return (
    <div className="layout">
      <TopNavbar />
      <div className="main-content">
        <SideNavbar />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route element={<ProtectedRouter />}>
            <Route element={<Layout />}>
              <Route path="/main" element={<MainPage />} />
              <Route path="/schedule" element={<SchedulePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
