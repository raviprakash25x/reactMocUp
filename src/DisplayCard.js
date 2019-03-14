import React, { Component } from 'react';
import expandlogo from './expand_logo.svg';
import './DisplayCard.css';
import CardChart from './CardChart'

class DisplayCard extends Component {
	
	constructor(props) {
		super(props);
		this.state = {
			width: this.props.width,
			height: this.props.height,
			hover: false,
			config: this.props.config
		};
		this.expandButton = (
			<div className="ExpandIcon" id="expandIcon" onClick = {() => this.props.onExpand(this.props.config)} >
				<img src={expandlogo} />
			</div>
		)
	}

	displayExpandButton() {
		this.setState({
			hover: true
		});
	}
	
	hideExpandButton() {
		this.setState({
			hover: false
		});
	}
	
	getOptionsFile(configNumber){
		if(configNumber === 1){
			return require('./bulkApi.js');
		}
		else if(configNumber === 2){
			return require('./nativeCrm.js');
		}		
		else if(configNumber == 3){
			return require('./pageViews.js');
		}
		else if(configNumber === 4){
			return require('./leadScoring.js');
		}/*
		else if(configNumber == 5){
			return require('./emailSends.js');
		}
		else if(configNumber == 6){
			return require('./formSubmissions.js');
		}
		else if(configNumber == 7){
			return require('./contacts.js');
		}*/
	}
	
	getDataFile(configNumber){
		if(configNumber === 1){
			return require('./bulkApi.json');
		}
		else if(configNumber === 2){
			return require('./nativeCrm.json');
		}
		/*
		else if(configNumber == 3){
			return require('./pageViews.js');
		}
		else if(configNumber == 4){
			return require('./leadScoring.js');
		}
		else if(configNumber == 5){
			return require('./emailSends.js');
		}
		else if(configNumber == 6){
			return require('./formSubmissions.js');
		}
		else if(configNumber == 7){
			return require('./contacts.js');
		}*/
	}
	
	componentDidMount() {
		this.displayCardDiv.style.width = this.state.width;
		this.displayCardDiv.style.height = this.state.height;
		this.setState({configFile: this.props.config});
	}

	render() {
		return (
			<div className="DisplayCard" ref= {c => this.displayCardDiv = c} onMouseOver = {() => this.displayExpandButton()} onMouseLeave = {() => this.hideExpandButton()}>
				<div className="HeaderLine">
					<div className="DisplayCardHeader">
						{this.props.title}
					</div>
					{this.state.hover === true ?  this.expandButton: null}
				</div>
				<div className="SubHeaderLine">
					<div className="LeftInfoText">
						{this.props.leftinfotext}
					</div>
					<div className="RightInfoText">
						{this.props.rightinfotext}
					</div>
				</div>
				<CardChart options={this.getOptionsFile(this.props.config).options} series={this.getOptionsFile(this.props.config).series}/>
			</div>
		);
	}
}

export default DisplayCard;
