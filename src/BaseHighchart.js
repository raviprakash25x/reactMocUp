import React from 'react';
import ReactDOM from 'react-dom';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import InputData from './InputData.json';

class BaseHighchart extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={optionValue:"Last 7 days",date:new Date()};
		this.handleChange=this.handleChange.bind(this);
		this.selectAppropriateData=this.selectAppropriateData.bind(this);
	}
	handleChange(e)
	{
		this.setState({optionValue:e.target.value});
	}
	selectAppropriateData(JsonData)
	{
		let copyData=JsonData.slice().reverse();
		if(this.state.optionValue=="Last 30 days")
			return copyData.splice(0,30).reverse();
	  if(this.state.optionValue=="Last 7 days")
			return copyData.splice(0,7).reverse();
		if(this.state.optionValue=="Last 90 days")
			return copyData.splice(0,90).reverse();
		return copyData.reverse();
	}
	getScore(JsonData)
	{
		let sum=0;
		let flag=0;
		if(this.state.optionValue=="Last 30 days")
			flag=JsonData.length-31;
	  else if(this.state.optionValue=="Last 7 days")
			flag= JsonData.length-8;
		else if(this.state.optionValue=="Last 90 days")
			flag=JsonData.length-91;
		for(var i=JsonData.length-1;i>=flag;i--)
			sum+=JsonData[i];
		return sum;
	}
	getOlderDate(currentDate,daysBefore)
	{
		return new Date(currentDate.getTime()-daysBefore*24*60*60*1000);
	}
	getStartDate()
	{
		if(this.state.optionValue=="Last 30 days")
			return this.getOlderDate(this.state.date,30);
	  if(this.state.optionValue=="Last 7 days")
			return this.getOlderDate(this.state.date,7);
		if(this.state.optionValue=="Last 90 days")
			return this.getOlderDate(this.state.date,90);
		return this.getOlderDate(this.state.date,365);
	}
	formatDate(date){
		const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
		date = date.getDate() + " " + months[date.getMonth()] ;
		return date;
	 }
	LastnDays () {
		var result = [];
		var n;
		if(this.state.optionValue=="Last 30 days")
			n=30;
	    else if(this.state.optionValue=="Last 7 days")
			n=7;
		else if(this.state.optionValue=="Last 90 days")
			n=90;
		else
			n=365;
		for (var i=0; i<n; i++) {
			var d = new Date();
			d.setDate(d.getDate() - i);
			result.push( this.formatDate(d) )
		}
		return result;
	}
	render()
	{
		let startDate=this.getStartDate();
		const options={
			chart: {
        type: 'bar'
    },
    title: {
        text: ''
    },
    xAxis: {
		type: 'datetime',
        categories: this.LastnDays(),
		
    },
    yAxis: {
		
		title: {
					text: '',
					},
				tickInterval:5,
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
    series: [{
        name: 'Page Views',
        data: this.selectAppropriateData(InputData.LeadScoreData),
    }, ],

		responsive: {
			rules: [{
				condition: {
					maxWidth: 500
				},
				chartOptions: {
					legend: {
						layout: 'horizontal',
						align: 'center',
						verticalAlign: 'bottom'
					}
				}
			}]
		}

	};
	const optionList=<select id="BaseHighChart" value={this.state.optionValue} onChange={this.handleChange}>
		<option value="Last 7 days">Last 7 days</option>
		<option value="Last 30 days">Last 30 days</option>
		<option value="Last 90 days">Last 90 days</option>
		<option value="Last Year">Last Year</option>
	</select>;
	//alert(this.state.date);
	//alert(this.getOlderDate(this.state.date,30));
	let screen=(
		<div>
			<div align="center"><h1>{this.getScore(InputData.LeadScoreData)}</h1><h3>Total Page Views</h3></div>
			<div>
			{optionList}
			<HighchartsReact
				highcharts={Highcharts}
				options={options}
			/>
			</div>
		</div>);
		return screen;
	};
}

export default BaseHighchart;