import React, { PropTypes } from 'react';
import css from './BehaviorList.scss';

export default class BehaviorWidget extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    description: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  };
  render() {
    const disabled = this.props.disabled ? 'disabled' : ''; // how to reference disabled from css?
    return (
      <li className={`${css.behaviorItem} ${disabled ? css.behaviorItemDisabled : ''}`}>
        <img src={`assets/${this.props.category}.svg`}
          alt={this.props.category}
          className={css.mainImage}
        />
        <div className={css.behaviorListContent}>
          <h3 className={css.name}>{this.props.header}</h3>
          <p className={css.description}>{this.props.description}</p>
        </div>
        <div className={css.behaviorListContentSubheader}>
          <p><span>For care:</span> {this.props.duration}</p>
        </div>
      </li>
    );
  }
}
