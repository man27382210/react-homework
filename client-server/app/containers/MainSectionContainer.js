import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainSection from '../components/MainSection';

import { actions as modalActions } from '../redux/modules/activateModal';
import { actions as ProductActions } from '../redux/modules/products';


const mapStateToProps = (state) => ({
  products: state.products,
  modalDisplay: state.activateModal
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...modalActions, ...ProductActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
