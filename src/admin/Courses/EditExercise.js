import React from 'react';
import { useParams } from 'react-router-dom';

const EditCourse = () => {
  const { name } = useParams();

  const excerices = [{
    name: 'Exercise 1',
    slug: '/admin/courses/kurs-1/övning-1'
  },
  {
    name: 'Exercise 2',
    slug: '/admin/courses/kurs-1/övning-2'
  }];

  const handleSaveExersice = (e) => {
    e.preventDefault();
    console.log('save execise');
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSaveExersice} as={Stack}>
          <label>
            Name
            <input type="name" value={name} />
          </label>
          <label>
            Efter
            <select name="prerequisite">
              {excerices.map(excerice => (
                <option value={excerice.slug}>{excerice.name}</option>
              ))}
            </select>
          </label>
          <label>
            Text
            <input type="text" />
          </label>
          <label>
            Alternativ
            <input type="alternative" />
          </label>
          <button type="submit">Spara</button>
        </form>
      </div>
    </div>
  );
};

export default EditCourse;