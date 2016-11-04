import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDJYOX29k76YpCNgnCqpX5xw50tR4WKwNc';

function App() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
