import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Link from '../../components/Link/Link';
import ProgressBar from '../../components/ProgressBar/ProgressBar';
import Inline from '../../components/Inline/Inline';
import Alert from '../../components/Alert/Alert';


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

const Image = styled.img`
  width: 400px;
`

const AlertContainer = styled.div`
  margin-top: 16px;
`
const Container = styled.div`
  margin-bottom: 32px;
`

const Lern = () => {
  const { courseName } = useParams();

  const [alert, setAlert] = useState(null);
  const [currentExercise, setCurrentExcersie] = useState(1);
  const [course, setCourse] = useState({});
  const [answer, setAnswer] = useState('');
  const [done, setDone] = useState(false);
  const exercise = course && course.exercises && course.exercises.find(exercise => exercise.index === currentExercise);

  console.log('rendering');

  const onSave = (e) => {
    e.preventDefault();
    const answered = e.target.answer.value;
    if (answered === exercise.answer) {
      setAlert('success');
      setAnswer('');
    } else {
      setAlert('failed');
      setAnswer(answered);
    }
  };

  const onNext = () => {
    setCurrentExcersie(currentExercise + 1);
    setAlert(null);
    setAnswer('');
  };

  useEffect(() => {
    if (course && course.exercises && course.exercises.length < currentExercise) {
      setDone(true);
    }
  }, [currentExercise, course]);

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

  if (done) {
    return (
      <div>Kursen är avslutad!</div>
    );
  }

  return (
    <Container>
      <h1>{course.title}</h1>
      <MaxWidth>
        <Center>
          <ProgressBar progress={(currentExercise - 1) / (course && course.exercises && course.exercises.length)} />
        </Center>
        <Link to="/learn">Close</Link>
      </MaxWidth>
      {exercise && (
        <form key={exercise.index} onSubmit={onSave}>
          <h4>{exercise.title}</h4>
          {exercise.type === 'image' && (
            <Image src={exercise.imageUrl} />
          )}
          <p>{exercise.text}</p>
          <Inline>
            <Input type="text" name="answer" />
            <Button variant="primary" type="submit">Svara</Button>
          </Inline>
        </form>
      )}
      {!exercise && (
        <div>Laddar</div>
      )}
      {alert && (
        <AlertContainer>
          {alert === 'success' && <Alert level={alert}>Du klarade det! <Button variant="primary" type="button" onClick={onNext}>Nästa</Button></Alert>}
          {alert === 'failed' && <Alert level={alert}>Du svarade {answer}, men svaret är {exercise.answer}. <Button variant="primary" type="button" onClick={onNext}>Nästa</Button></Alert>}
        </AlertContainer>
      )}
    </Container>
  );
};

export default Lern;
