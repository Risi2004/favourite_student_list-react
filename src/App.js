import './index.css'
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Students from './Students';
import FavoriteStudents from './FavoriteStudents';

function App() {
  const [favoriteStudents, setFavoriteStudents] = useState([]);

  const addToFavorites = (student) => {
    setFavoriteStudents((prev) => [...prev, student]);
  };

  const removeFromFavorites = (studentToRemove) => {
    setFavoriteStudents((prev) => prev.filter((student) => student !== studentToRemove));
  };

  return (
    <Router>
      <div>
        <nav className='navbar'>
              <Link to="/students" className='navbar__section'> Students </Link>
              <Link to="/favorites" className='navbar__section'> Favourite Students</Link>
        </nav>

        <Routes>
          <Route path="/students" element={<Students addToFavorites={addToFavorites} favoriteStudents={favoriteStudents} />} />
          <Route path="/favorites" element={<FavoriteStudents favoriteStudents={favoriteStudents} removeFromFavorites={removeFromFavorites} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;