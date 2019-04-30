import React from 'react';
import App from '../App.jsx';
import {shallow} from 'enzyme';
import {exampleAlbum} from '../mockData.js'

test('App exists', () => {
  expect(<App />).toBeTruthy();
});

describe('App', () => {
  it('should render App', () => {
    expect(shallow(<App album={exampleAlbum}/>).exists()).toBe(true);
  });
});

