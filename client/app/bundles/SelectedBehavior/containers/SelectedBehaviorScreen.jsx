import React, { PropTypes } from 'react';
import TwoColumn from './TwoColumn';
import Footer from '../../../components/footer/FooterWidget';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return { $$completing: state.$$completing };
}

const SelectedBehaviorScreen = (props) => {
  const { $$completing } = props;

  return (
    <div>
      <TwoColumn $$behavior={$$completing.get('behavior')} />
      <div className="container">
        <Footer />
      </div>
    </div>
  );
};

SelectedBehaviorScreen.propTypes = {
  dispatch: PropTypes.func.isRequired,
  $$completing: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(SelectedBehaviorScreen);
