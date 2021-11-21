import React from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Adduser from './pages/AddUser';
import EditUser from './pages/EditUser';
import Layout from './components/layout/Layout';


function App() {

  return (


    <Layout>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='add-user' element={<Adduser />}></Route>
        <Route path='edit-user/:uid' element={<EditUser />}></Route>
      </Routes>
    </Layout>

  );
}

export default App;
