import React, { PropTypes } from 'react';
import css from './Jumbotron.scss';

export default class JumbotronWidget extends React.Component {
  static propTypes = {
    $$person: PropTypes.object.isRequired,
  };

  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { fullName, rewardsEarned } = this.props.$$person.toJS();
    return (
      <div className={`jumbotron ${css.jumbotron}`}>
        <div className="container">
          <div className="row">
            <div className={`col-sm-8 ${css.jumbotronBlock}`}>
              <h2>Welcome, {fullName}.</h2>
              <h2>Earn rewards for healthy activities.</h2>
              <p>
                Protect your health and pad your wallet. Start your path to better health today.
              </p>
            </div>
            <div className={`col-sm-4 ${css.bankContainer} ${css.jumbotronBlock}`}>
              <img src="assets/giftcard.svg" alt="Gift Cards" className={css.bankImage}/>
              <div className={css.bankContent}>
                <p>Rewards earned to date:</p>
                <h2><span>$</span>{rewardsEarned}</h2>
                <p><a href="btn btn-link">Rewards History</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
