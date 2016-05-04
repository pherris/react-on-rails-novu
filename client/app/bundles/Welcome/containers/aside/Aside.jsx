import React from 'react';
import VideoPlayer from '../../../../components/video/VideoPlayer';
import css from './Aside.scss';

export default class TwoColumn extends React.Component {
  render() {
    return (
      <div className={css.asideColumn}>
        <div className={`${css.asideBlock} ${css.first}`}>
          <h2>How rewards work</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer magna justo, hendrerit
            ut pulvinar at, rhoncus vitae purus. Fusce turpis risus, aliquet sit amet tristique
            eget, bibendum quis arcu. Phasellus pharetra felis nec ligula molestie, a porttitor
            odio consequat.
          </p>
          <p>
            <a className="btn btn-default btn-lg btn-callout" href="#" role="button">Read more</a>
          </p>
        </div>
        <div className={css.asideBlock}>
          <h2>Healthy Pregnancy</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <VideoPlayer
            height={200}
            width={340}
            className={css.asideVideo}
            videoUrl="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          />
          <p>
            <a className="btn btn-default btn-lg btn-callout" href="#" role="button">Read more</a>
          </p>
        </div>
      </div>
    );
  }
}
