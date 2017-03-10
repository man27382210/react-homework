import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import ElementListItem from './elementListItem.jsx';


export class ElementList extends Component {
  constructor() {
    super();
  }
  render() {
    const style = {
      marginTop: '32px',
      marginBottom: '128px'
    };
    let result = null;
    // not an empty arry
    if (this.props.elementList.length > 0) {
      result = this.props.elementList.map((element, index )=> {
        element.sequenceNumber = index + 1;
        return (
          <ElementListItem
            key= {'ElementListItem' + index}
            index= {index}
            element = {element}
          />);
      });
    }
    return (
      <div id="element-list" style={style}>
        <table className="highlight bordered centered" >
          <thead>
            <tr>
              <th>sequence</th>
              <th>status</th>
              <th>category name</th>
              <th>title</th>
              <th>owner</th>
              <th>priority</th>
              <th>edit</th>
            </tr>
          </thead>

          <tbody >
            { result }
          </tbody>
        </table>
      </div>
    );
  }
}
ElementList.propTypes = {
  elementList: PropTypes.array,
  onElementListInit: PropTypes.func,
};
function mapStateToProps(state) {
  return {
    elementList: state.elementList
  };
}

export default connect(mapStateToProps)(ElementList);
