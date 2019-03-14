import React from 'react'
import CardChart from './CardChart'
import Dropdown from './dropdown.js'
import './DisplayCard.css';
import Summary from './summary.js'

var configFile=require('./leadScoring.js');

class PopUpLeadScoring extends React.Component {
	constructor(props) {
	super(props);
	this.state={
    timespan_leadScore:90,
    timespan_waitingOldest:30,
    chart_leadScore:undefined,
    chart_waitingOldest:undefined,
    leadScoreSeries:configFile.getSeries_leadScore(90),
    waitingOldestSeries:configFile.getSeries_waitingOldest(30)
	};
	this.handleChange_leadScore=this.handleChange_leadScore.bind(this);
	this.handleChange_waitingOldest=this.handleChange_waitingOldest.bind(this);
	this.setDataInChart_leadScore = this.setDataInChart_leadScore.bind(this);
	this.setDataInChart_waitingOldest = this.setDataInChart_waitingOldest.bind(this);
	}	
  
	componentDidMount(){
	//this.setState({configFile: require('./nativeCrm.js')});
	}
  
	handleChange_leadScore(e){
		this.setState({timespan_leadScore:e.target.value});
		//also set the sliced data
		//console.log(this.state.bar_series);
		this.setDataInChart_leadScore(this.state.chart_leadScore, e.target.value);
	}
	

	handleChange_waitingOldest(e){
		this.setState({timespan_waitingOldest:e.target.value})
		//also set the sliced data
		this.setDataInChart_waitingOldest(this.state.chart_waitingOldest, e.target.value);
	}
	
	setDataInChart_leadScore(highChart,days){
		if (days === undefined)
			this.setState({chart_leadScore: highChart});
		var localSeries = configFile.getSeries_leadScore(days === undefined?this.state.timespan_leadScore:days);
		var index = 0, length = localSeries.series.length;
		while (index < length){
			highChart.series[index].setData(localSeries.series[index].data);
			index++;
		}
	}

	setDataInChart_waitingOldest(highChart,days){
		if (days === undefined)
			this.setState({chart_waitingOldest: highChart});
		var localSeries = configFile.getSeries_waitingOldest(days === undefined?this.state.timespan_waitingOldest:days);
		var index = 0, length = localSeries.series.length;
		while (index < length){
			highChart.series[index].setData(localSeries.series[index].data);
			index++;
		}
	}
	render() {
		//console.log(configFile.bar_summary_data);

	return (
		  <div>
			<h3>Lead Scoring</h3>
			<Dropdown option = {0} optionValue={this.state.timespan_leadScore} handleChange={this.handleChange_leadScore}/>
			<CardChart options={configFile.options_leadScore} series = {configFile.getSeries_leadScore(this.state.timespan_leadScore)} chartCallback = {this.setDataInChart_leadScore}/>		
			<Summary summary_data = {configFile.leadScore_data} colors = {configFile.leadScore_colours}/>
			
			<h3>Waiting and Oldest in Queue</h3>
			<Dropdown option = {0} optionValue={this.state.timespan_waitingOldest} handleChange={this.handleChange_waitingOldest}/>
			<CardChart options={configFile.options_waitingOldest} series = {configFile.getSeries_waitingOldest(this.state.timespan_waitingOldest)} chartCallback = {this.setDataInChart_waitingOldest}/>	
			<Summary summary_data = {configFile.waitingOldest_data} colors = {configFile.waitingOldest_colours}/>

      </div>
		);
	}
}

export default PopUpLeadScoring;