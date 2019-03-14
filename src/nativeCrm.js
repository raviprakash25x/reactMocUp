import jsonData from './nativeCrm.json';

/*
	all data currently hard coded can be easily got from json file
*/

export var options = {
	  title: {
		text: '124',
		style: {"fontFamily": "Open Sans", "fontSize": "1.75vw"},
		margin: 0
	  },
	  subtitle: {
			text: 'Total outbound records processed',
			style: {"fontFamily": "Open Sans", "fontSize": "1vw"}
	  },
	  chart: {
		  plotBackgroundColor: null,
		  plotBorderWidth: null,
		  plotShadow: false,
		  type: 'pie'
		},
		tooltip: {
			pointFormat: '<b>{point.percentage:.1f}%</b>'
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: false
				},
				showInLegend: true
			}
		},
	  series: [{
			name: 'Brands',
			colorByPoint: true,
			data: [{
				name: 'Inbound',
				y: 32,
				sliced: true,
				selected: true
			}, {
				name: 'Completed',
				y: 42
			}, {
				name: 'Pending',
				y: 16
			}, {
				name: 'Failed',
				y: 10
			}]
		}]
}

export var series = {
		series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Inbound',
            y: 32,
            sliced: true,
            selected: true
        }, {
            name: 'Completed',
            y: 42
        }, {
            name: 'Pending',
            y: 16
        }, {
            name: 'Failed',
            y: 10
        }]
    }]
}


export var bar_options = {
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
					categories: jsonData.dates,
					crosshair: true,
					labels: {
						step: 3
					}
				},
				yAxis: {
					min: 0,
					title: {
						text: 'Records'
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
						borderWidth: 0,
						stacking: 'normal'
					}
				},
				series: [{
					data:[]
				}]	
	}
	
export function get_bar_series(days){
	var bar_series= {
	series: [{
				name: 'Inbound',
				data: jsonData.inbounds[0].counts.slice(0, days),
				stack: 'total',
				color: '#47BDEF'

			}, {
				name: 'Outbound',
				data: jsonData.outbounds[0].counts.slice(0,days),
				stack: 'total',
				color: '#0066ff'				

			},
			{
				name: 'Outbound Failed',
				data: jsonData.outbounds[2].counts.slice(0,days),
				color: '#ED6647'

			},
			{
				name: 'Outbound Pending',
				data: jsonData.outbounds[1].counts.slice(0,days),
				color: '#FFB54D'

			},
			{
				name: 'Outbound Completed',
				data: jsonData.outbounds[0].counts.slice(0,days),
				color: '#68C182'

			}
			]
		};
	return bar_series;
}

export var bar_summary_data = {
			'Total Inbound':20,
			'Total Outbound': 40,
			'Total Outbound Completed': 60,
			'Total Outbound Pending': 10,
			'Total Outbound Failed': 7
};	

export var bar_summary_colors = ['#47BDEF', '#0066ff', '#68C182', '#FFB54D', '#ED6647'];
	

export var line1_options = {
		options : {
			title: {
					text: ''
			},
				subtitle: {
					text: ''
			},
			xAxis: {
				categories: [1,2,3,4,5,6,7],
				crosshair: true,
				labels: {
					step: 3
				}
			},
			yAxis: {
				title: {
					text: 'Records'
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'right',
				verticalAlign: 'top'
			},

			plotOptions: {
				series: {
					label: {
						connectorAllowed: false
					}
				}
			},

			series: [{
				name: 'Outbound',
				data: [1,2,3,4,5,6,7],
				color: '#66ff99'
			}, {
				name: 'Inbound',
				data: [7,6,5,4,3,2,1],
				color: '#0099ff'
			}],

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
		}
}

export function get_line1_series(days){

	var line1_series= {
		series: [{
					name: 'Outbound',
					data: jsonData.outbounds[3].counts.slice(0,days),
					color: '#66ff99'
				}, {
					name: 'Inbound',
					data: jsonData.inbounds[1].counts.slice(0,days),
					color: '#0099ff'
				}]
	}
	
	return line1_series;
}

export var line1_summary_data = {
			'Total records waiting in queue':20,
			'Total inbound records waiting in queue': 40,
			'Total outbound records waiting in queue': 60
};	

export var line1_summary_colors = ['#000000','#0066ff', '#68C182'];

export var line2_options = {
		options : {
			title: {
				text: '',
				enabled: false
			},

			subtitle: {
				text: '',
				enabled: false
			},
			xAxis: {
				categories: [1,2,3,4,5,6,7],
				crosshair: true,
				labels: {
					step: 3
				}
			},
			yAxis: {
				title: {
					text: 'Records'
				}
			},
			legend: {
				layout: 'horizontal',
				align: 'right',
				verticalAlign: 'top'
			},

			plotOptions: {
				series: {
					label: {
						connectorAllowed: false
					}
				}
			},

			series: [{
				name: 'Outbound',
				data: [1,2,3,4,5,6,7],
				color: '#66ff99'
			}, {
				name: 'Inbound',
				data: [7,6,5,4,3,2,1],
				color: '#0099ff'
			}],

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
		}
}

export function get_line2_series(days){

	var line2_series= {
		series: [{
					name: 'Outbound',
					data: jsonData.outbounds[4].counts.slice(0,days),
					color: '#66ff99'
				}, {
					name: 'Inbound',
					data: jsonData.inbounds[2].counts.slice(0,days),
					color: '#0099ff'
				}]
	}
	
	return line2_series;
}

export var line2_summary_data = {
			'Oldest in queue':'1d3h'
};	

export var line2_summary_colors = ['#0066ff'];

