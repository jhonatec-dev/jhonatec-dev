import { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './css/main.css';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>App</h1>
        <Routes>
          <Route exact path="/" Component={ Home } />
          <Route path="*" Component={ NotFound } />
        </Routes>
      </div>
    );
  }
}
