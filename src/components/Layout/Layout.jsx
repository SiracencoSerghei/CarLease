// Layout.js
import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom'; // Import Outlet
import './Layout.css';

const Layout = () => {
  return (
    <div className="layout-container">
      <header className="header">
        <Navigation />
      </header>
      <main className="main-wrapper">
        <Outlet /> 
      </main>
      <footer className="footer">
        <p>&copy; 2023 AutoLeasing.</p>
      </footer>
    </div>
  );
};

export default Layout
