import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'react-emotion';

import Sky from '../Sky';
import Wrapper from './Wrapper';

const Stage = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 420px;
  background-color: #ccc;
`;


storiesOf('Wrapper', module)
  .add('Default (with Sky as child)', () => (
    <Wrapper>
      <Sky dayTime />
    </Wrapper>
  ))
  .add('Wrapper -> Stage -> Sky', () => (
    <Wrapper>
      <Stage>
        <Sky dayTime />
      </Stage>
    </Wrapper>
  ));
