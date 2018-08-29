import React from 'react';
import { storiesOf } from '@storybook/react';
import Sky from './Sky';

storiesOf('Sky', module)
  .add('default', () => (
    <Sky/>
  ))
  .add('default 2', () => (
    <Sky />
  ));
