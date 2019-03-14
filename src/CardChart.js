import React, { Component } from 'react';
import Highcharts from 'highcharts/highstock';
import './CardChart.css';
import HighChartsReact from 'highcharts-react-official';

class CardChart extends Component {
	constructor (props){
		super(props);
		this.state = {
			options: this.props.options
		};
		this.afterChartCreated = this.afterChartCreated.bind(this);
	}

	afterChartCreated(chart) {
		this.internalChart = chart;
	  }
	
	componentDidMount(){
		this.highChart.firstChild.style.height = '100%';
		if (this.props.chartCallback)
			this.props.chartCallback(this.internalChart);
	}

	componentWillReceiveProps(nextProps){}

	render() {
		this.props.options.series = this.props.series.series;
		return (
			<div className = 'CardChart' ref = {(c) => this.highChart = c}>
				{this.props.constructorType === 'stockChart' ? 
				<HighChartsReact 
				highcharts = {Highcharts}
				constructorType = 'stockChart'
				options = {this.props.options} callback={ this.afterChartCreated }/> : 
				<HighChartsReact 
				highcharts = {Highcharts}
				options = {this.props.options} callback={ this.afterChartCreated }/>}
			</div>
		);
	}
}

export default CardChart;
