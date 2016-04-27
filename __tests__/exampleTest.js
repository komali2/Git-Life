jest.unmock('../client/components/searchbar.js');

import React from 'react';
import ReactDOM from 'react';
import TestUtils from 'react-addons-test-utils';
import SearchBar from '../client/components/searchbar.js';


describe('SearchBar', () => {
  const searchbar = TestUtils.renderIntoDocument(
    <SearchBar />
  );

  expect(searchbar).toBeDefined();
})
