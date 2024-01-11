import React from 'react';
import './Home.css'; // Import CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
      <h2>Heading</h2>
      <p>Paragraph 1 - This is the first paragraph.</p>
      <p>Paragraph 2 - This is the second paragraph.</p>
    </div>
  );
};

export default Home;
