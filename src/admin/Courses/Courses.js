import React from 'react';
import Link from '../../components/Link/Link';
import styled from 'styled-components';

const StyledUl = styled.ul`
  list-style: none;
`;

const Courses = () => {
  const courses = [{
    name: 'Kurs 1',
    slug: '/courses/kurs-1'
  }, {
    name: 'Kurs 2',
    slug: '/courses/kurs-2'
  }];

  return (
    <div>
      <StyledUl>
        {courses.map(course => (
          <li><Link to={`/admin${course.slug}`}>{course.name}</Link></li>
        ))}
      </StyledUl>
      <Link to="/admin/courses/add">Lägg till kurs</Link>
    </div>
  );
};

export default Courses