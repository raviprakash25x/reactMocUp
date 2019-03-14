import React, { Component } from 'react';
import logo from './logo.svg';
import expandlogo from './expand_logo.svg';
import closelogo from './close_logo.svg';
import Highcharts from 'highcharts/highstock';
import testData from './TestData.json'
import './App.css';

class App extends Component {
	state = {
	series: [{
		  color: '#0066cc',
		  name: 'Syncs',
		  data: [
	        ['25 Nov',2000],
			['26 Nov',2074],
			['27 Nov',1946],
			['28 Nov',2009],
			['29 Nov',2035],
			['30 Nov',1865],
			['1 Dec',1923],
	      ]
	    }]
	}
	
	displayCardChartsRender() {
		Highcharts.chart({
			chart: {
				type: 'areaspline',
				renderTo: 'displayCardChart'
			},
			title: {
				text: '13,852',
				style: {"fontFamily": "Open Sans", "fontSize": "1.75vw"}
			},
			subtitle: {
				text: 'Total Bulk API Syncs',
				style: {"fontFamily": "Open Sans", "fontSize": "1vw"}
			},
			legend: {
				enabled: false
			},
			yAxis: {
				visible: false
			},
			xAxis: {
				categories: ['25 Nov', '26 Nov', '27 Nov', '28 Nov', '29 Nov', '30 Nov', '1 Dec']
			},
			credits: {
				enabled: false
			},
			plotOptions: {
				areaspline: {
					fillOpacity: 0.1
				},
				series: {
					marker: {
						enabled: false
					},
					states: {
						hover: {
							enabled: true,
							marker: {
								enabled: false
							}
						}
					}
				}
			},
			series: this.state.series
		});
	}
	
	expandedDisplayChartRender() {
		Highcharts.stockChart('expandedBulkAPIChart', {
		
		
			rangeSelector: {
				selected: 1
			},
		
			title: {
				visible: false
			},
		
			series: [{
				name: 'Syncs',
				data: testData,
				tooltip: {
					valueDecimals: 2
				}
			}]
		});
	}
	
	displayExpandedView() {
		document.getElementById("expandedView").style.visibility = "visible";
		document.getElementById("expandedView").style.left = "0px";
	}
	
	removeExpandedView() {
		document.getElementById("expandedView").style.visibility = "hidden";
		document.getElementById("expandedView").style.left = "-100%";
	}
	
	displayExpandButton() {
		document.getElementById("expandIcon").style.visibility = "visible";
	}
	
	hideExpandButton() {
		document.getElementById("expandIcon").style.visibility = "hidden";
	}
	
	componentDidMount() {
		this.displayCardChartsRender();
		window.dispatchEvent(new Event('resize'));
		this.expandedDisplayChartRender();
		window.dispatchEvent(new Event('resize'));
	}

	render() {
		return (
			<div className="App">
				<div className="BulkAPIDisplayCard" onMouseOver = {this.displayExpandButton} onMouseOut = {this.hideExpandButton}>
					<div className="HeaderLine">
						<div className="DisplayCardHeader">
							Bulk API
						</div>
						<div className="ExpandIcon" id="expandIcon" onClick = {this.displayExpandedView}>
							<img src={expandlogo} />
						</div>
					</div>
					<div className="HeaderLine">
						<div className="DayCountText">
							Last 7 Days
						</div>
						<div className="RightInfoText">
							<table><tbody><tr><td>Current consumption load&nbsp;</td><td><div className = "dot" ></div></td></tr></tbody></table>
						</div>
					</div>
					<div className = "DisplayCardChart" id='displayCardChart'>
					</div>
				</div>
				<div className = "ExpandedView" id = "expandedView">
					<div className = "ExpandedViewBackground" onClick = {this.removeExpandedView}>
					</div>
					<div className = "ExpandedViewContent">
						<div className="HeaderLine">
							<div className="DisplayCardHeader">
								Bulk API Syncs
							</div>
							<div className="CloseIcon" onClick = {this.removeExpandedView}>
								<img src={closelogo} />
							</div>
						</div>
						<div className="ExpandedBulkAPIChart" id="expandedBulkAPIChart">
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
