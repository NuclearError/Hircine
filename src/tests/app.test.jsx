import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import React from 'react';
import { shallow, render } from 'enzyme';
import App from '../components/app';
import Calendar from '../components/calendar';

describe('<App /> component', () => {

  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });

  it('renders on the page', () => {
    const app = shallow( <App /> );
    expect(app.find('<h1>').length).toBe(1);
  });

});
