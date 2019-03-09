import React from 'react';
import { shallow, render } from 'enzyme';

import App from '../app';

describe('<App /> component', () => {
  it('renders on the page', () => {
    const app = shallow(<App />);
    expect(app.find('h1').length).toBe(1);
  });
});
