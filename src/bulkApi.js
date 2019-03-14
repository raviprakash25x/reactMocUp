import data from './bulkApi.json'
import testData_90Days from './TestData_90Days.json'
import testData2_90Days from './TestData2_90Days.json'
import testData_30Days from './TestData_30Days.json'
import testData2_30Days from './TestData2_30Days.json'
import testData_7Days from './TestData_7Days.json'
import testData2_7Days from './TestData2_7Days.json'

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

export var stockChart_series_90Days= {
	series: [{
		data: testData_90Days
	}, {
		data: testData2_90Days
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

export var stockChart_series_7Days= {
	series: [{
		data: testData_7Days
	}, {
		data: testData2_7Days
	}]
}

export var stockChart_series_30Days= {
	series: [{
		data: testData_30Days
	}, {
		data: testData2_30Days
	}]
}