import React from 'react';
import css from './Behavior.scss';

export default class BehaviorListWidget extends React.Component {
  render() {
    return (
      <ul className={css.bundleList}>
        <li className={css.behaviorItem}>
          <img src="assets/prenatal.svg" alt="Prenatal" className={css.mainImage} />
          <div className={css.behaviorListContent}>
            <h3 className={css.name}>Healthy Pregnancy 1</h3>
            <p className={css.description}>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.</p>
          </div>
          <div className={css.behaviorListContentSubheader}>
            <p><span>For care:</span> Jan 1, 2016 - Dec. 31, 2016</p>
          </div>
        </li>
        <li className={css.behaviorItemDisabled}>
          <img src="assets/locked.svg" alt="Prenatal" className={css.mainImage} />
          <div className={css.behaviorListContent}>
            <h3 className={css.name}>Healthy Pregnancy 1</h3>
            <p className={css.description}>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.</p>
          </div>
          <div className={css.behaviorListContentSubheader}>
            <p><span>For care:</span> Jan 1, 2016 - Dec. 31, 2016</p>
          </div>
        </li>
        <li className={css.behaviorItemDisabled}>
          <img src="assets/locked.svg" alt="Prenatal" className={css.mainImage} />
          <div className={css.behaviorListContent}>
            <h3 className={css.name}>Healthy Pregnancy 1</h3>
            <p className={css.description}>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.</p>
          </div>
          <div className={css.behaviorListContentSubheader}>
            <p><span>For care:</span> Jan 1, 2016 - Dec. 31, 2016</p>
          </div>
        </li>
        <li className={css.behaviorItemDisabled}>
          <img src="assets/locked.svg" alt="Prenatal" className={css.mainImage} />
          <div className={css.behaviorListContent}>
            <h3 className={css.name}>Healthy Pregnancy 1</h3>
            <p className={css.description}>Lorem ipsum dolor sit amet, consectetur
              adipiscing elit.</p>
          </div>
          <div className={css.behaviorListContentSubheader}>
            <p><span>For care:</span> Jan 1, 2016 - Dec. 31, 2016</p>
          </div>
        </li>
      </ul>
    );
  }
}
