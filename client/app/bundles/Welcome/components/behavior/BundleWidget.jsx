import React, { PropTypes } from 'react';
import css from './Bundle.scss';
import BehaviorList from './BehaviorListWidget';

export default class BundleWidget extends React.Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rewards: PropTypes.array.isRequired,
    duration: PropTypes.string.isRequired,
  };

  render() {
    const { header, description, rewards, duration } = this.props;
    const rewardSeperator = <span> + </span>;
    const formattedRewards = [];

    // split apart the reward(s) and format the strings
    rewards.forEach(reward => {
      const rewardParts = /([\$])(\d+)(.+)/g.exec(reward);
      formattedRewards.push([
        (rewardParts && rewardParts[1]) ?
          <span className={css.currencySymbol}>{rewardParts[1]}</span> : '',
        (rewardParts && rewardParts[2]) ?
          <span className={css.amount}>{rewardParts[2]}</span> : '',
        (rewardParts && rewardParts[3]) ? <span>{rewardParts[3]}</span> : '',
        (!rewardParts) ? <span>{reward}</span> : '',
        rewardSeperator,
      ]);
    });

    return (
      <div className={css.bundleContainer}>
        <div className={css.bundleHeader}>
          <img src="assets/prenatal.svg" alt="Prenatal" className={css.bundleImage} />
          <div className={css.bundleHeaderContent}>
            <h2 className={css.bundleName}>{header}</h2>
            <p className={css.bundleDescription}>{description}</p>
            <hr />
            <h2 className={css.bundleReward}>{formattedRewards}</h2>
          </div>
        </div>
        <div className={css.bundleSubheader}>
          <p><span>For care:</span> {duration}</p>
        </div>
        <BehaviorList />
      </div>
    );
  }
}
