import React from 'react';
import { storiesOf } from '@storybook/react';
import styled, { css } from 'react-emotion';

import Sky from './Sky';

const Container = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 300px;
  padding: 10px;
  margin: 15px;
`;

storiesOf('Sky', module)
  .add('default visible', () => (
    <Sky visible/>
  ))
  .add('default invisible', () => (
    <Sky visible={false} />
  ))
  .add('child of parent div', () => (
    <Container>
      <Sky visible />
    </Container>
  ));
