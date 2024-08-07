import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home page</h1>  
      <nav>
        <h2><Link to="/page1">Page1</Link></h2>
        <h2><Link to="/page2">Page2</Link></h2>
      </nav>
    </div>
  );
}

export default Home;