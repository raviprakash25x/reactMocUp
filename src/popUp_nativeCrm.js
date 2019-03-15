import React from 'react'
import CardChart from './CardChart'
import Dropdown from './dropdown.js'
import './DisplayCard.css';
import Summary from './summary.js'

var configFile = require('./nativeCrm.js');

class PopUpNativeCrm extends React.Component {
	constructor(props) {
	super(props);
	this.state={
		timespan_bar:30,
		timespan_line1:30,
		timespan_line2:30,
		chart_bar: undefined,
		char_line1: undefined,
		chart_line2: undefined,
		line1_series: configFile.get_line1_series(30),
		line2_series: configFile.get_line2_series(30)
	};
	console.log("hi");
	this.handleChange_bar=this.handleChange_bar.bind(this);
	this.handleChange_line1=this.handleChange_line1.bind(this);
	this.handleChange_line2=this.handleChange_line2.bind(this);
	this.setDataInChart_bar = this.setDataInChart_bar.bind(this);
	this.setDataInChart_line1 = this.setDataInChart_line1.bind(this);
	this.setDataInChart_line2 = this.setDataInChart_line2.bind(this);
	}	
  
	componentDidMount(){
	//this.setState({configFile: require('./nativeCrm.js')});
	}
  
	handleChange_bar(e){
		this.setState({timespan_bar:e.target.value});
		//also set the sliced data
		//console.log(this.state.bar_series);
		this.setDataInChart_bar(this.state.chart_bar, e.target.value);
	}
	

	handleChange_line1(e){
		this.setState({timespan_line1:e.target.value})
		//also set the sliced data
		this.setDataInChart_line1(this.state.chart_line1, e.target.value);
	}
  
	handleChange_line2(e){
		this.setState({timespan_line2:e.target.value,
					   line2_series: configFile.get_line2_series(e.target.value)});
		//also set the sliced data
		this.setDataInChart_line2(this.state.chart_line2, e.target.value);
	}
	
	setDataInChart_bar(highChart,days){
		if (days === undefined)
			this.setState({chart_bar: highChart});
		var localSeries = configFile.get_bar_series(days === undefined?this.state.timespan_bar:days);
		var index = 0, length = localSeries.series.length;
		while (index < length){
			highChart.series[index].setData(localSeries.series[index].data);
			index++;
		}
	}

	setDataInChart_line1(highChart,days){
		if (days === undefined)
			this.setState({chart_line1: highChart});
		var localSeries = configFile.get_line1_series(days === undefined?this.state.timespan_line1:days);
		var index = 0, length = localSeries.series.length;
		while (index < length){
			highChart.series[index].setData(localSeries.series[index].data);
			index++;
		}
	}
	
	setDataInChart_line2(highChart,days){
		if (days === undefined)
			this.setState({chart_line2: highChart});
		var localSeries = configFile.get_line2_series(days === undefined?this.state.timespan_line2:days);
		var index = 0, length = localSeries.series.length;
		while (index < length){
			highChart.series[index].setData(localSeries.series[index].data);
			index++;
		}
	}
 
	render() {
		console.log(configFile.line1_options);		

	return (
		  <div>
			<h3>CRM Throughput</h3>
			<Dropdown option = {0} optionValue={this.state.timespan_bar} handleChange={this.handleChange_bar}/>
			<CardChart options={configFile.bar_options} series = {configFile.get_bar_series(this.state.timespan_bar)} chartCallback = {this.setDataInChart_bar}/>		
			<Summary summary_data = {configFile.bar_summary_data} colors = {configFile.bar_summary_colors}/>
			<hr/>
			
			<h3>Waiting in Queue</h3>
			<Dropdown option = {0} optionValue={this.state.timespan_line1} handleChange={this.handleChange_line1}/>
			 <CardChart options={configFile.line1_options} series = {configFile.get_line1_series(this.state.timespan_line1)} chartCallback = {this.setDataInChart_line1}/>
			<Summary summary_data = {configFile.line1_summary_data} colors = {configFile.line1_summary_colors}/>
			<hr/>
			
			<h3>Oldest in Queue</h3>
			<Dropdown option = {0} optionValue={this.state.timespan_line2} handleChange={this.handleChange_line2}/>
			<CardChart options={configFile.line2_options} series = {configFile.get_line2_series(this.state.timespan_line1)} chartCallback = {this.setDataInChart_line2}/>	
			<Summary summary_data = {configFile.line2_summary_data} colors = {configFile.line2_summary_colors}/>
		  </div>
		);
	}
}

export default PopUpNativeCrm;