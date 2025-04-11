
import React, { useState } from 'react';

function Students({ addToFavorites, favoriteStudents }) {
  const initialStudents = ['Vimal', 'Kamal', 'Risi', 'Jega', 'Ravi'];
  const [students] = useState(initialStudents);

  const handleAddToFavorites = (student) => {
    if (!favoriteStudents.includes(student)) {
      addToFavorites(student);
    }
  };

  return (
    <div>
      <h1>Students</h1>
      <ol className='studentlist'>
        {students.map((student) => (
          <li key={student}>
            {student}
            <button className='btn'
              onClick={() => handleAddToFavorites(student)}
              disabled={favoriteStudents.includes(student)}
            >
              {favoriteStudents.includes(student) ? 'Added' : 'Add to Favorites'}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Students;