// HelloWorldWidget is an arbitrary name for any "dumb" component. We do not recommend suffixing
// all your dump component names with Widget.

import React, { PropTypes } from 'react';
import _ from 'lodash';
import css from './scss/Activities.scss';

// Simple example of a React "dumb" component
export default class ActivitiesWidget extends React.Component {
  static propTypes = {
    // If you have lots of data or action properties, you should consider grouping them by
    // passing two properties: "data" and "actions".
    // updateName: PropTypes.func.isRequired,
    $$activities: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }

  round(number) {
    return Math.round(number * 100) / 100;
  }

  render() {
    const activities = this.props.$$activities.toJS();
    const activityList = [];
    _.map(activities, activity => {
      return Object.assign({
        athlete_name: _.isNil(activity.athlete) ? '' :
          `${activity.athlete.firstname} ${activity.athlete.lastname}`,
        distance: (activity.distance > 0 ? this.round(activity.distance / 1000) : 0) + ' km',
        time: this.round(activity.elapsed_time / 60 / 60) + ' hr',
        link: `https://www.strava.com/activities/${activity.id}`,
      }, _.pick(activity, ['max_speed', 'name', 'type']));
    }).forEach((activity, index) => {
      activityList.push(<div className="activity" key={index}>
        <h5 className={css.header}>
          - {activity.athlete_name}
        </h5>
        {activity.name}, {activity.distance}
      </div>);
    });

    return (
      <div className={ `container ${css.activity}` }>
        <h3>
          Activities: {activities.length}
        </h3>
        <div>
          {activityList}
        </div>
      </div>
    );
  }
}
