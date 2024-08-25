// src/App.js
import React from 'react';
import Dashboard from './pages/Dashboard';
import { Layout } from 'antd';

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Dashboard />
    </Layout>
  );
}

export default App;
