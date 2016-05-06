import React, { PropTypes } from 'react';
import css from './SelectedBehavior.scss';
import commonCss from '../../../css/Common.scss';
import Reward from '../../../components/reward/Reward';

export default class TwoColumn extends React.Component {
  static propTypes = {
    $$behavior: PropTypes.object.isRequired,
  };

  render() {
    const {
      about,
      category,
      description,
      duration,
      header,
      reward,
      whatToExpect,
    } = this.props.$$behavior.toJS();

    return (
      <div className="container detail">
        <div className="row">
          <div className="standard-container">
            <div className="col-sm-6 main-column">
              <div className={css.detailHeader}>
                <img src={`assets/${category}.svg`} />
                <div className={css.detailHeaderContent}>
                  <h2>{header}</h2>
                  <p>{description}</p>
                </div>
              </div>
              <hr/>
              <div className={css.detailForm}>
                <h3>Tell us about your care</h3>
                <form>
                  <div className="form-group">
                    <label>Date of test*</label>
                    <input className="form-control" />
                  </div>
                  <div className="form-group">
                    <label>Name of clinic*</label>
                    <input className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Doctor's name*</label>
                    <input className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Doctor's phone*</label>
                    <input className="form-control" />
                  </div>

                  <small>* I pledge that the information entered is honest and accurate.</small>
                  <div className="option-buttons">
                    <a className={`btn btn-primary ${commonCss.btnPrimary}`} href="cards.html">
                      Next
                    </a>
                    <a className="btn btn-link" href="index.html">Back</a>
                  </div>
                </form>
              </div>

            </div>

            <div className={`col-sm-6 ${commonCss.noPaddingRight} ${commonCss.asideColumn}`}>
              <div className={css.detailAsideHeader}>
                <div className={css.infoBlock}>
                  <img src="assets/reward-amount.svg" />
                  <h4 className={css.rewardAmount}>
                    <Reward text={reward} />
                  </h4>
                </div>
                <div className={css.infoBlock}>
                  <img src="assets/behavior-dates.svg" />
                  <p>For care:<br/><span>{duration}</span></p>
                </div>
              </div>
              <div className={`${css.detailDescription} ${commonCss.asideBlock}`}>
                <h3>About {header}</h3>
                <p>{about}</p>
              </div>
              <div className={`${css.detailSubDescription} ${commonCss.asideBlock}`}>
                <h3>What to expect</h3>
                <p>{whatToExpect}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
