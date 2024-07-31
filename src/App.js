import React, { Component } from 'react'
import Item1 from './components/item11.js';
import Home from './Login.js';
import Main from './Main.js';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route path='*' element={<Main/>}/>
            <Route path='/home' element={<Home/>}/>
            </Routes>
        </Router>
      </>
    )
  }
}
