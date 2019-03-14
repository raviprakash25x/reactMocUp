import React, { Component } from 'react';
import './TabButtons.css';
import buttonData from './tabButtonOptions.js'

class TabButtons extends Component {
	constructor(props){
		super(props);
	}

	render() {
        let menu;
        var buttonList=buttonData[this.props.option];
        menu=buttonList.map((ele,index) => <div className={ele[0] === this.props.selected? "tabButton_selected":"tabButton"} onClick = {() => this.props.onTabChange(index)}>{ele[1]}</div>);
		return (
			<div className="TabButtons">
				{menu}
			</div>
		);
	}
}

export default TabButtons;
