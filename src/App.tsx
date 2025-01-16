import React from 'react';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Helmet from 'react-helmet';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;