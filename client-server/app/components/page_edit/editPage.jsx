import React, { PropTypes } from 'react';
import EditModal from './editModal.jsx';
import { connect } from 'react-redux';
import Constant from 'common/constant';

class EditPage extends React.Component {
  constructor() {
    super();
    this.checkValidPage = this.checkValidPage.bind(this);
    this.state = {
      element: {
        owner: Constant.OWNER_DEFAULT,
        title: Constant.TITLE_DEFAULT,
        category: Constant.CATEGORY_DEFAULT,
        status: Constant.STATUS_DEFAULT,
        priority: Constant.PRIORITY_DEFAULT,
      }
    };
  }
  componentWillMount() {
    /*
     * the component is going to render that means elementList has been loaded.
     * so it is unnecessary to check if elementList has been fininshed loading or not.
     */
    this.checkValidPage();
  }
  checkValidPage() {
    // if the index element are not exsit or any other error.
    return new Promise((resolve, reject) => {
      const element = this.props.elementList[this.context.router.params.index - 1];
      if (element) {
        resolve(element);
      } else {
        reject('404');
      }
    })
      .then((element) => {
        // set state
        this.setState({
          element: {
            ...element,
            sequenceNumber: this.context.router.params.index
          }
        });
      })
      .catch(() => {
        this.context.router.replace('/NotFound');
      });
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
        <EditModal element={this.state.element}/>
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
