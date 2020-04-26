import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const ProgressBar = styled.div`
  display: flex;
  height: 1rem;
  font-size: .75rem;
  width: 90%;
  background-color: #e9ecef;
  border-radius: .25rem;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

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
  }, [courseName]);

  if (!course) {
    return null;
  }

  return (
    <div>
      <Center>
        <ProgressBar progress={1 / course && course.exercises && course.exercise.length} />
      </Center>
      <h1>{course.title}</h1>
      <p>{course.text}</p>
      <h2>Frågor</h2>
      {course && course.exercises && course.exercises.map(exercise => (
        <div>
          <h3>Fråga {exercise.index}</h3>
          <h4>{exercise.title}</h4>
          <p>{exercise.text} =</p>
          <input type="text" />
          <button type="button" onClick={handleSave}>Svara</button>
        </div>
      ))}
    </div>
  );
};

export default Lern;
