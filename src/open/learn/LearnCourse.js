import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Stack from '../../components/Stack/Stack';
import Link from '../../components/Link/Link';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Inline from '../../components/Inline/Inline';


const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const MaxWidth = styled.div`
  width: 90%;
  display: flex;
  margin: 0 auto;
`;

const Lern = () => {
  const { courseName } = useParams();

  const [currentExercise, setCurrentExcersie] = useState(0);
  const [course, setCourse] = useState({});

  const onSave = (e) => {
    console.log('answer', e.target.answer.value);
    e.preventDefault();
    setCurrentExcersie(currentExercise + 1);
  };

  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch('/.netlify/functions/read-course', {
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
      <h1>{course.title}</h1>
      <MaxWidth>
        <Center>
          <ProgressBar progress={currentExercise / (course && course.exercises && course.exercises.length + 3)} />
        </Center>
        <Link to="/learn">Close</Link>
      </MaxWidth>
      <Stack>
        {course && course.exercises && course.exercises.map(exercise => (
          <form key={exercise.index} onSubmit={onSave}>
            <h4>{exercise.title}</h4>
            <p>{exercise.text} =</p>
            <Inline>
              <Input type="text" name="answer" />
              <Button variant="primary" type="submit">Svara</Button>
            </Inline>
          </form>
        ))}
      </Stack>
    </div >
  );
};

export default Lern;
