import React from 'react'
import CardChart from './CardChart'
import Dropdown from './dropdown'


class PopUpBulkApi extends React.Component {

  constructor(props) {
    super(props);
	this.state={
		timespan_stockChart: 7,
		configFile: require('./bulkApi.js'),
		chart: undefined
	};
	this.handleChange_stockChart=this.handleChange_stockChart.bind(this);
	this.setDataInChart_stockChart=this.setDataInChart_stockChart.bind(this);
	}	
	
	handleChange_stockChart(e){
		this.setState({
			timespan_stockChart:e.target.value,
		});
		this.setDataInChart_stockChart(this.state.chart,e.target.value);
	}
	
	setDataInChart_stockChart(highChart,days){
		if (days === undefined)
			this.setState({chart: highChart});
		var localSeries = this.state.configFile.get_stockChart_series(days === undefined?this.state.timespan_stockChart:days);
		highChart.series[0].setData(localSeries.series[0].data);
		highChart.series[1].setData(localSeries.series[1].data);
	}
 
  render() {
    return (
      <div>
				<h3>Bulk API</h3>
				<Dropdown option = {0} optionValue={this.state.timespan_stockChart} handleChange={this.handleChange_stockChart}/>
				<CardChart options={this.state.configFile.stockChart_options} series = {this.state.configFile.stockChart_series_default} constructorType = 'stockChart' chartCallback = {this.setDataInChart_stockChart}/>
			</div>
    );
  }
}

export default PopUpBulkApi;