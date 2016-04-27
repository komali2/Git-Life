jest.unmock('../client/components/searchitem.js');

import React from 'react';
import ReactDOM from 'react';
import TestUtils from 'react-addons-test-utils';
import SearchItem from '../client/components/searchitem.js';


describe('SearchItem', () => {
  const searchitem = TestUtils.renderIntoDocument(
    <SearchItem />
  );
  var renderer = TestUtils.createRenderer();
  renderer.render(<SearchItem />);
  var subject = renderer.getRenderOutput();


  const test2 = TestUtils.renderIntoDocument(<div />);

  const testMe = TestUtils.isDOMComponent(test2);
  it('is of type div', () => {
    expect(subject.type).toBe('div');
  })
  it('exists', () => {
    expect(subject).toBeDefined();
  });

})
