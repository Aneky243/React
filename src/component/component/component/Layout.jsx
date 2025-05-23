import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <div className="pt-20">{children}</div> {/* Pushes content below navbar */}
    </>
  );
}

export default Layout;
