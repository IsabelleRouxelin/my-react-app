import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/main.css';

const Layout = ({ children, selectedPage, onSetPage }) => {
  return (
    <div className="layout-container">
      <Header selectedPage={selectedPage} onSetPage={onSetPage} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;