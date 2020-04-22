import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Lern = () => {
  const { courseName } = useParams();

  const [course, setCourse] = useState({});

  const handleSave = () => {

  };

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch('https://festive-beaver-65f40c.netlify.app/.netlify/functions/read-course', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: courseName }),
      });
      const body = await response.json();
      if (body) {
        setCourse(body);
      }
    }
    fetchCourse();
  }, []);

  if (!course) {
    return null;
  }

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.text}</p>
      <h2>Frågor</h2>
      {course && course.exersices && course.exersices.map(exersice => (
        <div>
          <div>{exersice.index}</div>
          <h3>{exersice.title}</h3>
          <p>{exersice.text}</p>
          <input type="text" />
          <button type="button" onClick={handleSave}>Svara</button>
        </div>
      ))}
    </div>
  );
};

export default Lern;
