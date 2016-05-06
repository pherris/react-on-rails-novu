import React, { PropTypes } from 'react';
import css from './Bundle.scss';
import BehaviorList from './BehaviorListWidget';
import Reward from '../../../../components/reward/Reward';

export default class BundleWidget extends React.Component {
  static propTypes = {
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    rewards: PropTypes.array.isRequired,
    duration: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    behaviors: PropTypes.array.isRequired,
  };

  render() {
    const { header, description, rewards, duration, behaviors, category } = this.props;
    const rewardSeperator = <span> + </span>;
    const formattedRewards = [];

    // split apart the reward(s) and add seperator
    rewards.forEach((reward, index) => {
      formattedRewards.push(<Reward text={reward} />);
      if (index !== rewards.length - 1) {
        formattedRewards.push(rewardSeperator);
      }
    });

    return (
      <div className={css.bundleContainer}>
        <div className={css.bundleHeader}>
          <img src={`assets/${category}.svg`} alt={category} className={css.bundleImage} />
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
        <div className={css.bundleList}>
          <BehaviorList {... { behaviors }}/>
        </div>
      </div>
    );
  }
}
