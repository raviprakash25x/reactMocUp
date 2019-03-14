import React, { Component } from 'react';
import DisplayCard from './DisplayCard'
import './App.css';
import PopUp from './popUp.js';

class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			popupDisplayed: false,
			module: 1,
			moduleTitle: ''
		}
			
		this.displayExpandedView = this.displayExpandedView.bind(this);
		this.removeExpandedView = this.removeExpandedView.bind(this);
	}
	
	displayExpandedView(x) {
		this.setState({popupDisplayed:true,
					  module : x});
	}
	
	removeExpandedView() {
		this.setState({popupDisplayed:false});
	}
	
	componentDidMount() {
		window.dispatchEvent(new Event('resize'));
	}

	render() {
		return (
			<div className="App">
				<DisplayCard config = {1} title = "Bulk API" leftinfotext = "Last 7 Days" rightinfotext = {[<table><tbody><tr><td>Current consumption load</td><td><div className = "dot" ></div></td></tr></tbody></table>]} onExpand = {this.displayExpandedView} width = "62%" height = "23vw"/>
				<DisplayCard config = {2} title = "Native CRM" leftinfotext = "Last 7 Days" rightinfotext = "" onExpand = {this.displayExpandedView} width = "31%" height = "23vw"/>
				<DisplayCard config = {3} title = "Page Views" leftinfotext = "Last 7 Days" rightinfotext = "" onExpand = {this.displayExpandedView} width = "62%" height = "23vw"/>
				 <DisplayCard config={4} title = "Lead Scoring" leftinfotext = "Last 7 Days" rightinfotext = "" onExpand = {this.displayExpandedView} width = "31%" height = "23vw"/>
				 <DisplayCard config={1} title = "Email Sends" leftinfotext = "Last 7 Days" rightinfotext = "" onExpand = {this.displayExpandedView} width = "29.5%" height = "23vw"/>
				<DisplayCard config={1} title = "Form Submissions" leftinfotext = "Last 7 Days" rightinfotext = "" onExpand = {this.displayExpandedView} width = "29.5%" height = "23vw"/>
					<DisplayCard config={1} title = "Contacts" leftinfotext = "Last 7 Days" rightinfotext = "" onExpand = {this.displayExpandedView} width = "31%" height = "23vw"/>
				
				{this.state.popupDisplayed ? <PopUp onClose = {this.removeExpandedView} module = {this.state.module}/>: null}
			</div>
		);
	}
}

export default App;
