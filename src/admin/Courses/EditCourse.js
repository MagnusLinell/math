import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Stack from '../../components/Stack/Stack';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const EditCourse = () => {
  const { name } = useParams();

  const courses = [{
    name: 'Kurs 1',
    slug: '/courses/kurs-1'
  },
  {
    name: 'Kurs 2',
    slug: '/courses/kurs-2'
  }];
  const excerices = [];

  const handleSaveCourse = (e) => {
    e.preventDefault();
    console.log('save course');
  };

  const handleAddExersice = (e) => {
    e.preventDefault();
    console.log('add execise');
  };

  return (
    <Wrapper>
      <Form onSubmit={handleSaveCourse} as={Stack}>
        <label>
          Namn
        </label>
        <input type="name" value={name} />
        <label>
          Efter kursen
        </label>
        <select name="prerequisite">
          {courses.map(course => (
            <option value={course.slug}>{course.name}</option>
          ))}
        </select>
        <button type="submit">Spara</button>
      </Form>
      <Form onSubmit={handleAddExersice}>
        <div>
          {excerices.map(exercise => (
            <div>{exercise}</div>
          ))}
        </div>
        <button type="submit">Lägg till övning</button>
      </Form>
    </Wrapper>
  );
};

export default EditCourse;