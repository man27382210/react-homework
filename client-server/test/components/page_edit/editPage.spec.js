import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { EditPage } from 'components/page_edit/editPage.jsx';
import mockRouterContext from 'helpers/mockRouterContext';

/* testing milestone
 * 1. componentDidMount
 * 2. checkValidPage
 *  a. valid => keep rendering
 *  b. invalid => 404
 */

// the following are mock data.
const mockElementListItem = {
  category: 'cat1',
  title: 'title',
  owner: 'Nick',
  status: 'Open',
  priority: 'Emergency',
};
const mockElementListCount = 5;
const mockElementList = Array.apply(null, new Array(mockElementListCount)).map(() => {
  return mockElementListItem;
});

// enzymeWrapper setup
function setup(url) {
  const props = {
    elementList: mockElementList,
  };
  const context = {
    router: {
      ...mockRouterContext,
      params: {
        index: url
      }
    }
  };
  return mount(<EditPage {...props} />, { context});
}

// stub rendering.
sinon.stub(EditPage.prototype, 'render').returns(<div></div>);


describe('<EditPage />', () => {
  let stub;
  describe('#componentDidMount', () => {
    describe('when component did mount,', () => {
      it('should call componentDidMount and checkValidPage once', () => {
        // stub checkValidPage
        stub = sinon.stub(EditPage.prototype, 'checkValidPage');

        sinon.spy(EditPage.prototype, 'componentDidMount');
        mount(<EditPage />);
        expect(EditPage.prototype.componentDidMount.calledOnce).to.equal(true);
        expect(EditPage.prototype.checkValidPage.calledOnce).to.equal(true);

        // restore stub
        stub.restore();
      });
    });
  });
  describe('#checkValidPage', () => {
    describe('if page is valid,', () => {
      // keep rendering
      it('should set state of modalDisplay correctly', () => {
        const mockURL = 1;
        const mockIndex = mockURL - 1;
        const enzymeWrapper = setup(mockURL);
        const result = {
          ...mockElementList[mockIndex],
          sequenceNumber: mockURL,
          index: mockIndex,
        };
        // stub setState in order to test state immediately.
        stub = sinon.stub(EditPage.prototype, 'setState').returns(enzymeWrapper.setState);
        expect(enzymeWrapper.state().modalDisplay).to.deep.equal(result);

        // restore stub
        stub.restore();
      });
    });
    describe('if page is invalid', () => {
      it('should return status 404', () => {
        setup(mockElementListCount);
        const spy = sinon.spy(EditPage.prototype, 'checkValidPage');
        expect(spy).to.throw(Error);
      });
    });
  });
});
