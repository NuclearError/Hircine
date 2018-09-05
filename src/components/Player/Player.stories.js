import React from 'react';
import { storiesOf } from '@storybook/react';
import { Provider } from 'react-redux';

// import styled from 'react-emotion';

import { createStore } from '../../reducers';

import Player from './Player';

storiesOf('Player', module)
  .addDecorator(story => <Provider store={createStore()}>{story()}</Provider>)
  .add('Default Player', () => (
    <Player />
  ));
