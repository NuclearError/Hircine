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
  .addDecorator(story => <Container>{story()}</Container>)
  .add('Default day', () =>
    <Sky dayTime />)
  .add('Default night', () =>
    <Sky dayTime={false} />);
