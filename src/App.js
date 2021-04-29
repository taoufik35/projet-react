import './App.css';
import Header from './component/layout/header/Header';


import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;