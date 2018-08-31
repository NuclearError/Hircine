import React from 'react';
import { storiesOf } from '@storybook/react';
// import styled from 'react-emotion';

import Player from './Player';

storiesOf('Player', module)
  .add('Default Player', () => (
    <Player />
  ))
  .add('Player Health Zero', () => (
    <Player health={0} />
  ));
