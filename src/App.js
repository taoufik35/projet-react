import './App.css';
import Header from './component/layout/header/Header';
import Footer from './component/layout/footer/Footer';
import Nav from './component/layout/nav/Nav';
import Search from './component/search/Search';
import News from './component/news/News';



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
      <Router>
        <Nav />
        <main className= "container my-5 ">
          <Switch>
            <Route path="/">
              <News />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <News />
          </Switch>
        </main>
      </Router>
      <Footer />
    </div>
  );
}

export default App;