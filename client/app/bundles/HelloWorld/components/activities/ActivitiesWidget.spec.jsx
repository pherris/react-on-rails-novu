import { React, expect, TestUtils } from 'lib/testHelper';

import ActivitiesWidget from './ActivitiesWidget';
import Immutable from 'immutable';

const {
  findRenderedDOMComponentWithTag,
  renderIntoDocument,
} = TestUtils;

describe('ActivitiesWidget', () => {
  it('renders an author and comment with proper css classes', () => {
    const activities = renderIntoDocument(
      <ActivitiesWidget
        $$activities={Immutable.fromJS([])}
        $$statistics={Immutable.fromJS({ strava_api_time: 2 })}
      />
    );

    const callTime = findRenderedDOMComponentWithTag(activities, 'h5');
    expect(callTime.textContent).to.equal('api call time: 2');
  });

  // it('shows the author', () => {
  //   const component = renderIntoDocument(
  //     <ActivitiesWidget author="Frank" text="Hi!" />
  //   );
  //
  //   const author = findRenderedDOMComponentWithClass(component, 'js-comment-author');
  //   expect(author.textContent).to.equal('Frank');
  // });
  //
  // it('shows the comment text in markdown', () => {
  //   const component = renderIntoDocument(
  //     <ActivitiesWidget author="Frank" text="Hi!" />
  //   );
  //
  //   const comment = findRenderedDOMComponentWithClass(component, 'js-comment-text');
  //   expect(comment.textContent).to.equal('Hi!\n');
  // });
});
