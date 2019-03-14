import data from './bulkApi.json'
import testData_90Days from './BulkApi_StockChartData_Syncs_90Days.json'
import testData2_90Days from './BulkApi_StockChartData_Throughput_90Days.json'
import barChartApplicationData from './BulkApi_BarChart_ApplicationData_48Hrs.json'

export var options = {
			chart: {
				type: 'areaspline',
				width: undefined,
				height: undefined
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
			}
			
}	


export var series= {
	series: [{
		name: 'Syncs',
        data: data.data
    }]
}	

export var stockChart_options = {
	rangeSelector: {
		enabled: false
	},

	chart: {
		events: {
      /*load: function() {
				var chart = this,
          navigator = chart.navigator,
          ratio = chart.yAxis[1].getExtremes().max / chart.yAxis[0].getExtremes().max;


        navigator.series[1].points.forEach(function(p) {
          p.update({
            y: p.y / ratio
          });
				}, false);
				
				this.redraw();
			}*/
    }
	},

	legend: {
		enabled: true,
		align: 'right',
		verticalAlign: 'top'
	},

	plotOptions: {
		series: {
			marker: {
				enabled: true,
				radius: 4,
				symbol: 'circle'
			}
		}
	},

	title: {
		visible: false
	},
	xAxis: {
		range: 2*24*3600*1000
	},
	yAxis: [{ //--- Primary yAxis
		title: {
			text: 'Syncs',
		},
		opposite: false
	}, { //--- Secondary yAxis
		title: {
			text: 'Throughput',
		},
	}],
	marker: {
		enabled: true
	},
	scrollbar: {
		enabled: false
	},
	credits: {
		enabled: false
	}
}

export var stockChart_series_default= {
	series: [{
		yAxis: 0,
		name: 'Syncs',
		type: 'area',
		data: [],
		color: '#267db3',
		fillOpacity: 0.05,
		showInNavigator: true
	}, {
		yAxis: 1,
		name: 'Throughput',
		type: 'area',
		data: [],
		color: '#66ccff',
		fillOpacity: 0.05,
		showInNavigator: true
	}]
}

export function get_stockChart_series(days){
	var currData = [];
	var currData2 = [];
	var dataLength = testData_90Days.length - 1;
	var currIndex = dataLength-1;
	while (testData_90Days[currIndex][0] >= testData_90Days[dataLength-1][0] - (days * 24 * 3600 * 1000) && testData2_90Days[currIndex][0] >= testData2_90Days[dataLength-1][0] - (days * 24 * 3600 * 1000) && currIndex >= 0){
		currData.splice(0,0,testData_90Days[currIndex]);
		currData2.splice(0,0,testData2_90Days[currIndex]);
		currIndex--;
	}
	var currSeries = {
		series: [{
			data: currData
		},{
			data: currData2
		}]
	}
	return currSeries;
}

export function get_bar_options(days) {
	var bar_options = {
	chart: {
		type: 'column'
	},
	title: {
		text: ''
	},
	subtitle: {
		text: ''
	},
	xAxis: {
		categories: ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00','00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00'].slice(48-days,48),
		crosshair: true,
		labels: {
			step: 2
		}
	},
	yAxis: {
		min: 0,
		title: {
			text: 'Syncs'
		}
	},
	legend: {
		layout: 'horizontal',
		align: 'right',
		verticalAlign: 'top'
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
			'<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	plotOptions: {
		column: {
			pointPadding: 0.1,
			width: 3,
			borderWidth: 0,
			stacking: 'normal'
		}
	},
	series: [{
		data:[]
	}]	
}
return bar_options;
}

export function get_bar_series(days, enabledSeries){
	var localSeries = [];
	for (var index = 0;index<enabledSeries.length;index++){
		localSeries.push({name: barChartApplicationData[enabledSeries[index]][0],
		data: barChartApplicationData[enabledSeries[index]][1].slice(48-days,48)
		});
	}
	var bar_series= {
	series: localSeries
		};
	return bar_series;
}

export function get_bar_series_total(days){
	var nameWithTotal = [];
	for (var index=0;index<barChartApplicationData.length;index++){
		var currSeriesTotal = 0;
		for (var dayIndex = 48-days;dayIndex < 48;dayIndex++)
			currSeriesTotal += barChartApplicationData[index][1][dayIndex];
		nameWithTotal.push([barChartApplicationData[index][0],currSeriesTotal]);
	}
	return nameWithTotal;
}