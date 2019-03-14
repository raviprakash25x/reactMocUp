import Highcharts from 'highcharts';
import InputData from './pageViews.json';


function formatDate(date){
    const months = ["Jan", "Feb", "Mar","Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    date = date.getDate() + " " + months[date.getMonth()] ;
    return date;
 }
function LastnDays () {
    var result = [];
    var n=7;
    for (var i=0; i<n; i++) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        result.push( formatDate(d) )
    }
    return result;
}
function selectAppropriateData(JsonData,days)
{
    let copyData=JsonData.slice().reverse();
        return copyData.splice(0,days).reverse();
}
function add(accumulator, a) {
    return accumulator + a;
}
function selectSummaryData(JsonData,days)
{
    let copyData=JsonData.slice().reverse();
        let data = copyData.splice(0,days).reverse();
        return data.reduce(add);
}


export var options={
    chart: {
            type: 'bar'
    },
    title: {
        text: '5,379',
        style: {"fontFamily": "Open Sans", "fontSize": "1.75vw"},
        margin: 0
    },
    subtitle: {
        text: 'Total Page Views',
        style: {"fontFamily": "Open Sans", "fontSize": "1vw"}
    },
    xAxis: {
        type: 'datetime',
        categories: LastnDays()
    },
    yAxis: {
        title: {
            text: '',
        },
        tickInterval:5
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal'
        }
    },
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

export var series = {
    series: [{
        showInLegend: false, 
        name: 'Page Views',
        data: selectAppropriateData(InputData.LeadScoreData,7)
    }]
}

export var line_options = {
    chart: {
        type: 'line'
    },
    title: {
        text: '',
    },
    yAxis: {
        title: {
            text: 'Page Views',
            },
        tickInterval:5,
    },
    xAxis:{
        type:'datetime',
        labels: {
            format: '{value:%d %b}',
        },
    },
    legend: {
        layout: 'horizontal',
            align: 'right',
            verticalAlign: 'top',
    },

    plotOptions: {
        series: {
        label: {
            connectorAllowed: false
                },
        }
    },
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

function getOlderDate(currentDate,daysBefore)
{
    let res= new Date(currentDate.getTime()-daysBefore*24*60*60*1000);
    console.log('date = '+res);
    return res;
}
function getStartDate(days)
{
    return getOlderDate(new Date(),days);
}

export function get_line_series(days) {
    let startDate=getStartDate(days);
    
        var yo=
        { series: [{
            name: 'Page Views',
            data: selectAppropriateData(InputData.LeadScoreData,days),
            type: 'area',
            color:'#1580AD',
            fillOpacity: 0.1,
            pointStart: Date.UTC(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()),
            pointInterval: 24 * 36 * 100000 //* 36e5
        }]
    }
    
    console.log('series = ');
    console.log(series);
    return yo;
}


export var line2_options = {
			
    title: {
        text: '',
    },
    subtitle: {
        text: ''
    },
    yAxis: {
        title: {
            text: 'Page Views',
        },
            //tickInterval:5,
    },
    xAxis:{
        type:'datetime',
        labels: {
            format: '{value:%d %b}',
        },
    },
    legend: {
            layout: 'horizontal',
            align: 'right',
            verticalAlign: 'top',
    },
    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
        }
    },
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
    },
    tooltip: {
        crosshairs: [true, false]
    },
    tooltip: {
        crosshairs: true,
        animation: true,
        shared: true,
        useHTML: true,
        formatter: function() {
            var symbol="<svg width='20' height='20'>" + this.points[0].series.legendSymbol.element.outerHTML + "</svg>";
            var symbol2="<svg width='20' height='20'>" + this.points[1].series.legendSymbol.element.outerHTML + "</svg>";
            var symbol3="<svg width='20' height='20'>" + this.points[2].series.legendSymbol.element.outerHTML + "</svg>";
            var date=Highcharts.dateFormat('%A,%e %B %Y',new Date(this.x));
            return  date +'<br>'
                + symbol + this.points[0].series.name + ' per hour : ' + this.points[0].y + '<br>'
                + symbol2 + this.points[1].series.name + ' : ' + this.points[1].y + '<br>'
                + symbol3 + this.points[2].series.name + ' : ' + this.points[2].y;
        }
    }
}




export function get_line2_series(days) {
    let startDate=getStartDate(days);
    
    var data = {
        series: [{
        name: 'Average',
        data: selectAppropriateData(InputData.Average,days),
        pointStart: Date.UTC(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()),
            pointInterval: 24 * 36e5
        }, 
        {
        name: 'Minimum',
        data: selectAppropriateData(InputData.Minimum,days),
        pointStart: Date.UTC(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()),
            pointInterval: 24 * 36e5
        }, {
        name: 'Maximum',
        data: selectAppropriateData(InputData.Maximum,days),
        pointStart: Date.UTC(startDate.getFullYear(),startDate.getMonth(),startDate.getDate()),
            pointInterval: 24 * 36e5
        }, ]
    }
    return data;
}


export function get_line_summary_data(days) {
    var data = {
            'Total Page Views':selectSummaryData(InputData.LeadScoreData,days),
            'Breach Occurrences':0
    };
    return data;
}

export var line_summary_data = {
    'Total Page Views':selectSummaryData(InputData.LeadScoreData,7),
    'Breach Occurrences':0
};	


export var line_summary_colors = ['#47BDEF', '#000000'];


export var scatter_options = {
    chart: {
        type: 'scatter'

    },
    title: {
        text: ''
    },
    xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
            millisecond: '%H:%M:%S.%L',
            second: '%H:%M:%S',
            minute: '%H:%M',
            hour: '%H:%M',
            day: '%e. %b',
            week: '%e. %b',
            month: '%b \'%y',
            year: '%Y'
        },
        title: {
            text: 'Date'
        },
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Number of occurences'
        },
        min: 0
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: '#FFFFFF',
        borderWidth: 1
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                Highcharts.dateFormat('%b %Y',
                    new Date(this.x))
                + ',' + this.y + ' occurences ';
        }
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: true
                    }
                }
            },
            tooltip: {
                headerFormat: '<b>Random</b><br>'
            }
        },
        series: {
        },
        allowPointSelect: true

    },
    series: [{

        name: 'Warning Limit',
        data: [[Date.UTC(2018, 1), 1],
            [Date.UTC(2018, 2), 2],
            [Date.UTC(2018, 3), 4],
            [Date.UTC(2018, 4), 2],
            [Date.UTC(2018, 5), 5],
            [Date.UTC(2018, 6), 4],
            [Date.UTC(2018, 7), 3],
            [Date.UTC(2018, 8), 1],
            [Date.UTC(2018, 9), 0],
            [Date.UTC(2018, 10), 1],
            [Date.UTC(2018, 11), 4],
            [Date.UTC(2018, 12), 4]]
    },
        {
            name: 'Critical Limit',
            data: [[Date.UTC(2018, 1), 3],
                [Date.UTC(2018, 2), 4],
                [Date.UTC(2018, 3), 1],
                [Date.UTC(2018, 4), 0],
                [Date.UTC(2018, 5), 2],
                [Date.UTC(2018, 6), 0],
                [Date.UTC(2018, 7), 1],
                [Date.UTC(2018, 8), 0],
                [Date.UTC(2018, 9), 0],
                [Date.UTC(2018, 10), 3],
                [Date.UTC(2018, 11), 0],
                [Date.UTC(2018, 12), 0]]
        }
    ]

}


export var scatter_series =
    {
    series: [{

    name: 'Warning Limit',
    data: [[Date.UTC(2018, 1), 1],
        [Date.UTC(2018, 2), 2],
        [Date.UTC(2018, 3), 4],
        [Date.UTC(2018, 4), 2],
        [Date.UTC(2018, 5), 5],
        [Date.UTC(2018, 6), 4],
        [Date.UTC(2018, 7), 3],
        [Date.UTC(2018, 8), 1],
        [Date.UTC(2018, 9), 0],
        [Date.UTC(2018, 10), 1],
        [Date.UTC(2018, 11), 4],
        [Date.UTC(2018, 12), 4]]
},
    {
        name: 'Critical Limit',
        data: [[Date.UTC(2018, 1), 3],
            [Date.UTC(2018, 2), 4],
            [Date.UTC(2018, 3), 1],
            [Date.UTC(2018, 4), 0],
            [Date.UTC(2018, 5), 2],
            [Date.UTC(2018, 6), 0],
            [Date.UTC(2018, 7), 1],
            [Date.UTC(2018, 8), 0],
            [Date.UTC(2018, 9), 0],
            [Date.UTC(2018, 10), 3],
            [Date.UTC(2018, 11), 0],
            [Date.UTC(2018, 12), 0]]
    }
]}
