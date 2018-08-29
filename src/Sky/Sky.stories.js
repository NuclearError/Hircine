import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'react-emotion';

import Sky from './Sky';

const Container = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 300px;
  margin: 15px;
`;

storiesOf('Sky', module)
  .add('Default day', () => (
    <Container>
      <Sky dayTime />
    </Container>
  ))
  .add('Default night', () => (
    <Container>
      <Sky dayTime={false} />
    </Container>
  ));
