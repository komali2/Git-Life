jest.unmock('../client/components/searchitem.js');

import React from 'react';
import ReactDOM from 'react';
import TestUtils from 'react-addons-test-utils';
import SearchItem from '../client/components/searchitem.js';


describe('SearchItem', () => {
  const searchitem = TestUtils.renderIntoDocument(
    <SearchItem />
  );

  it('exists', () => {
    expect(searchitem).toBeDefined();
  });

})
