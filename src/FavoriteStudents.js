
import React from 'react';

function FavoriteStudents({ favoriteStudents, removeFromFavorites }) {
  return (
    <div>
      <h1>Favourite Students</h1>
      <ol className='studentlist'>
        {favoriteStudents.map((student) => (
          <li key={student}>
            {student}
            <button className='btn' onClick={() => removeFromFavorites(student)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default FavoriteStudents;