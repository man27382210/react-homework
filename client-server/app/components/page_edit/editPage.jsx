import React from 'react';
import EditModal from './editModal.jsx';
import { connect } from 'react-redux';

class EditPage extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  componentWillMount() {
    // if it's the first time to visit this app.
    if (this.props.elementList.length <= 0) {
      console.log('welcome visiting :)');

    }
  }
  componentWillReceiveProps(nextProps) {
    console.log('nextProps');
    console.log(nextProps);
    // // receive central state and set local state
    // this.setState({
    //   ...nextProps.modalDisplay
    // });
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
        <EditModal />
      </div>

    );
  }
}
function mapStateToProps(state) {
  return {
    elementList: state.elementList
  };
}
export default connect(mapStateToProps)(EditPage);
