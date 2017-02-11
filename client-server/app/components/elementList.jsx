import React, {Component} from 'react';
import ElementListItem from './elementListItem.jsx';

export default class ElementList extends Component {
  constructor() {
    super();
  }
  render() {
    const style = {
      marginTop: '32px',
      marginBottom: '128px'
    };
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
            {
              Array.apply(null, new Array(5)).map((v, i)=>{
                return (
                  <ElementListItem
                    key= {'ElementListItem' + i}
                    element = {{
                      sequenceNumber: i + 1,
                      categoryName: 'cat1',
                      title: 'title',
                      owner: 'Nick',
                      status: 'open',
                      priority: 'emergency',
                    }}
                  />);
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}
