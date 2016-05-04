import React, { PropTypes } from 'react';
import css from './Bank.scss';

export default class BankWidget extends React.Component {
  static propTypes = {
    rewardsEarned: PropTypes.number.isRequired,
  };

  render() {
    return (
      <div className={`${css.bankContainer} ${css.jumbotronBlock}`}>
        <img src="assets/giftcard.svg" alt="Gift Cards" className={css.bankImage}/>
        <div className={css.bankContent}>
          <p>Rewards earned to date:</p>
          <h2><span>$</span>{this.props.rewardsEarned}</h2>
          <p><a href="btn btn-link">Rewards History</a></p>
        </div>
      </div>
    );
  }
}
