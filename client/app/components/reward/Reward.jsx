import React, { PropTypes } from 'react';
import css from './Reward.scss';

export default class Reward extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
  };

  constructor(props, context) {
    super(props, context);
    this.formatReward = this.formatReward.bind(this);
  }

  formatReward(rewardText) {
    const rewardParts = /([\$])(\d+)(.+)/g.exec(rewardText);

    if (!rewardParts) {
      return <span>{rewardText}</span>;
    }

    const formattedReward = [];
    if (rewardParts[1]) {
      formattedReward.push(<span className={css.currencySymbol}>{rewardParts[1]}</span>);
    }

    if (rewardParts[2]) {
      formattedReward.push(<span className={css.amount}>{rewardParts[2]}</span>);
    }

    if (rewardParts[3]) {
      formattedReward.push(<span>{rewardParts[3]}</span>);
    }

    return formattedReward ? formattedReward : rewardText;
  }

  render() {
    const formattedReward = this.formatReward(this.props.text);

    return (
      <span>
        {formattedReward}
      </span>
    );
  }
}
