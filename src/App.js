import React from 'react'
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import  { Navbar } from './components';
import './App.css';


const App = () => {
  return (
    <div clsasName='app'>
      <div clsasName='navbar'>
        <Navbar />
      </div>
      <div clsasName='main'>

      </div>
      <div clsasName='footer'>

      </div>
    </div>
  )
}

export default App