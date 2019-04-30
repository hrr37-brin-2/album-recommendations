import React from 'react';
import RecommendedAlbums from '../components/RecommendedAlbums.jsx';
import {shallow} from 'enzyme';
import {mockAlbumResults} from '../mockData.js'

test('RecommendedAlbums exists', () => {
  expect(<RecommendedAlbums />).toBeTruthy();
});

describe('RecommendedAlbums', () => {
  it('should render RecommendedAlbums', () => {
    expect(shallow(<RecommendedAlbums albums={mockAlbumResults}/>).exists()).toBe(true);
  })
})
