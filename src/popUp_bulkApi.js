import React from 'react'
import CardChart from './CardChart'
import Dropdown from './dropdown'
import TabButtons from './TabButtons'

class PopUpBulkApi extends React.Component {

  constructor(props) {
    super(props);
	this.state={
		timespan_stockChart: 7,
		timespan_applicationsChart: 24,
		configFile: require('./bulkApi.js'),
		stock_chart: undefined,
		bar_applications_chart: undefined,
		tab_selectedOption: 0,
		bar_applications_chart_enabledSeries: undefined
	};
	this.handleChange_stockChart=this.handleChange_stockChart.bind(this);
	this.setDataInChart_stockChart=this.setDataInChart_stockChart.bind(this);
	this.handleTabChange = this.handleTabChange.bind(this);
	this.handleChange_applicationsChart=this.handleChange_applicationsChart.bind(this);
	this.setDataInChart_barChart=this.setDataInChart_barChart.bind(this);
	this.refreshBarApplicationsChartSeries = this.refreshBarApplicationsChartSeries.bind(this);
	this.handleBarApplicationChartCheckBox = this.handleBarApplicationChartCheckBox.bind(this);
	this.refreshBarApplicationsChartSeries();
	}	
	
	handleChange_stockChart(e){
		this.setState({
			timespan_stockChart:e.target.value,
		});
		this.setDataInChart_stockChart(this.state.stock_chart,e.target.value);
	}
	
	setDataInChart_stockChart(highChart,days){
		if (days === undefined)
			this.setState({stock_chart: highChart});
		var localSeries = this.state.configFile.get_stockChart_series(days === undefined?this.state.timespan_stockChart:days);
		highChart.series[0].setData(localSeries.series[0].data);
		highChart.series[1].setData(localSeries.series[1].data);
	}

	handleChange_applicationsChart(e){
		this.setState({
			timespan_applicationsChart:e.target.value,
		});
		this.setDataInChart_barChart(this.state.bar_applications_chart,e.target.value);
	}

	setDataInChart_barChart(highChart,days){
		if (days === undefined)
			this.setState({bar_applications_chart: highChart});
	}

	handleTabChange(selectedTab){
		this.setState({tab_selectedOption: selectedTab});
	}

	refreshBarApplicationsChartSeries(){
		var barSeriesTotalData = this.state.configFile.get_bar_series_total(this.state.timespan_applicationsChart);
		var currEnabledSeries = [];
		for(var index = 0;index < barSeriesTotalData.length;index++){
			currEnabledSeries.push(index);
		}
		this.state.bar_applications_chart_enabledSeries = currEnabledSeries;
	}
 
	handleBarApplicationChartCheckBox(e){
		var currEnabledSeries = this.state.bar_applications_chart_enabledSeries;
		if(e.target.checked){
			currEnabledSeries.push(parseInt(e.target.value));
		}else{
			for (var index=0;index<currEnabledSeries.length;index++){
				if ((""+currEnabledSeries[index]) === e.target.value){
					currEnabledSeries.splice(index,1);	
				}
			}
		}
		console.log(currEnabledSeries);
		this.setState({bar_applications_chart_enabledSeries: currEnabledSeries});
	}

  render() {
		console.log("EnabledSeries: ",this.state.bar_applications_chart_enabledSeries);
		let applicationsBarChart = (
			<div>
			<Dropdown option = {1} optionValue={this.state.timespan_applicationsChart} handleChange={this.handleChange_applicationsChart}/>
			<CardChart options={this.state.configFile.get_bar_options(this.state.timespan_applicationsChart)} series = {this.state.configFile.get_bar_series(this.state.timespan_applicationsChart,this.state.bar_applications_chart_enabledSeries)} chartCallback = {this.setDataInChart_barChart}/>
			<table>
				<tr>
					<th><input type='checkbox'/></th><th>Application Name</th><th>Bulk API Syncs</th><th>% of total 100%</th>
				</tr>
				<tbody>
					{this.state.configFile.get_bar_series_total(this.state.timespan_applicationsChart).map((ele,index) => <tr>
						<td>{this.state.bar_applications_chart_enabledSeries.filter((e)=>e === index).length !== 0?<input type='checkbox' value={index} onChange = {this.handleBarApplicationChartCheckBox} checked/>:<input type='checkbox' value={index} onChange = {this.handleBarApplicationChartCheckBox}/>}</td>
						<td>{ele[0]}</td>
						<td>{ele[1]}</td>
						<td></td>
						</tr>
					)}
				</tbody>
			</table>
			</div>
		);
    return (
      <div>
				<h3>Bulk API</h3>
				<Dropdown option = {0} optionValue={this.state.timespan_stockChart} handleChange={this.handleChange_stockChart}/>
				<CardChart options={this.state.configFile.stockChart_options} series = {this.state.configFile.stockChart_series_default} constructorType = 'stockChart' chartCallback = {this.setDataInChart_stockChart}/>
				<hr/>
				<TabButtons option = {0} selected = {this.state.tab_selectedOption} onTabChange = {this.handleTabChange} />
				<hr/>
				{this.state.tab_selectedOption === 0 ? applicationsBarChart : null}
			</div>
    );
  }
}

export default PopUpBulkApi;