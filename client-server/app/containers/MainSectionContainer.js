import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MainSection from '../components/MainSection';

import { actions as ProductActions } from '../redux/modules/products';


const mapStateToProps = (state) => ({
  products: state.products
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ ...ProductActions }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
