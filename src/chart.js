/*generic Highchart component to be implemented by Anajans*/

import React, { Component } from 'react';

class ReactHighchart extends Component {
  constructor(props) {
		super(props);
		this.state = {options: []};
  }
  
  componentDidMount() {
		//set data
  }
  
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default ReactHighchart;