import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // To navigate programmatically

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here, for example, checking credentials
    if (email === 'test@example.com' && password === 'password123') {
      // Redirect to the Home page upon successful login
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Navigation Bar */}
      <nav className="w-full px-6 py-4 bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">
            <button onClick={() => navigate('/')}>Home</button>
          </div>
          <div className="space-x-6 text-lg">
            <button onClick={() => navigate('/login')} className="text-gray-700 hover:text-blue-600">
              Login
            </button>
            <button onClick={() => navigate('/about')} className="text-gray-700 hover:text-blue-600">
              About Us
            </button>
            <button onClick={() => navigate('/contact')} className="text-gray-700 hover:text-blue-600">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-center flex-grow w-full max-w-md mt-24">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-lg text-gray-700">Email</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-lg text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
