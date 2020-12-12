import React from 'react';
import SongDetails from './SongDetails';
import SongsList from './SongsList';

function App() {
  return (
    <div className = "ui container grid">
      <div className = "ui row">
        <div className= "column eight wide">
          <SongsList/>
        </div>
        <div className = "column eight wide">
          <SongDetails/>
        </div>
      </div>
    </div>
  );
};

export default App;
