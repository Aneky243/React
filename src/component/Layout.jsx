// component/Layout.jsx
import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="pt-20">{children}</div> {/* Padding for fixed navbar */}
    </>
  );
}

export default Layout;
    