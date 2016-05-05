import React, { PropTypes } from 'react';
import css from './BehaviorList.scss';
import Behavior from './BehaviorWidget';

export default class BehaviorListWidget extends React.Component {
  static propTypes = {
    behaviors: PropTypes.array.isRequired,
  };

  render() {
    const behaviorList = [];
    this.props.behaviors.forEach(behavior => behaviorList.push(<Behavior
      {... behavior}
      key={behavior.id}
    />));

    return (
      <ul className={css.behaviorList}>
        {behaviorList}
      </ul>
    );
  }
}
