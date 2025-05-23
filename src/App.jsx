import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Admission from './component/Admission';
import ContactUs from './component/ContactUs';
import Programs from './component/Programs';
import Login from './component/Login';
import Register from './component/Register';
import Layout from './component/Layout';  // Import layout

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout><Home /></Layout>} />
      <Route path="/home" element={<Layout><Home /></Layout>} />  {/* Added this */}
      <Route path="/about" element={<Layout><About /></Layout>} />
      <Route path="/programs" element={<Layout><Programs /></Layout>} />
      <Route path="/admission" element={<Layout><Admission /></Layout>} />
      <Route path="/contactus" element={<Layout><ContactUs /></Layout>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
}

export default App;
