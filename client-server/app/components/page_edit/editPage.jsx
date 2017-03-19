import React, { PropTypes } from 'react';
import EditModal from './editModal.jsx';
import { connect } from 'react-redux';
import Constant from '../../common/constant';

export class EditPage extends React.Component {
  constructor() {
    super();
    this.checkValidPage = this.checkValidPage.bind(this);
    this.state = {
      modalDisplay: {
        owner: Constant.OWNER_DEFAULT,
        title: Constant.TITLE_DEFAULT,
        category: Constant.CATEGORY_DEFAULT,
        status: Constant.STATUS_DEFAULT,
        priority: Constant.PRIORITY_DEFAULT,
      }
    };
  }
  componentDidMount() {
    /*
     * the component is going to render that means elementList has been loaded.
     * so it is unnecessary to check if elementList has been fininshed loading or not.
     */
    this.checkValidPage();
  }
  checkValidPage() {
    // if the index element are not exsit or any other error.
    try {
      const element = this.props.elementList[this.context.router.params.index - 1];
      if (element) {
        this.setState({
          modalDisplay: {
            ...element,
            sequenceNumber: this.context.router.params.index,
            index: this.context.router.params.index - 1,
          }
        });
      } else {
        throw new Error(404);
      }
    } catch (e) {
      this.context.router.replace('/NotFound');
    }
  }
  render() {
    const style = {
      height: '100vh',
      backgroundColor: '#e0e0e0', // gray
    };
    return (
      <div
        className="valign-wrapper"
        style={style}
      >
        <EditModal modalDisplay={this.state.modalDisplay}/>
      </div>

    );
  }
}

EditPage.contextTypes = {
  router: React.PropTypes.object
};

EditPage.propTypes = {
  elementList: PropTypes.array,
};
function mapStateToProps(state) {
  return {
    elementList: state.elementList
  };
}
export default connect(mapStateToProps)(EditPage);
