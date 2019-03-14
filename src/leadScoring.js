export var options={
   chart: {
       type: 'line'
   },
   title: {
        text: '163',
        style: {"fontFamily": "Open Sans", "fontSize": "1.75vw"}
    },
    subtitle: {
        text: 'Total Contacts Scored',
        style: {"fontFamily": "Open Sans", "fontSize": "1vw"}
    },  
   yAxis: {
       visible:false,
       tickInterval:5
   },
   xAxis:{
       type:'datetime',
       tickLength:0,
       labels: {
           format: '{value:%d %b}',
   }
   },
   legend: {
       enabled:false,
   },
plotOptions: {
       series: {
       label: {
           connectorAllowed: false
               },
       marker: {
           enabled: false
               },

       },
},
series: [{
   name: '',
   data:[6,13,9,11,15,10,6,5],
   type:'area',
   color:'#1580AD',
   fillOpacity: 0.075,
   pointStart: Date.UTC(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()),
   pointInterval: 24 * 36e5
   },],

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

export var series={
   series: [{
       name: '',
       data:[6,13,9,11,15,10,6,5],
       type:'area',
       color:'#1580AD',
       fillOpacity: 0.075,
       pointStart: Date.UTC(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()),
       pointInterval: 24 * 36e5
       },]
};

export var options_leadScore={
    chart: {
        type: 'line'
    },
    title: {
        text: '',
        align:'left',
        margin:30,
        style:{"fontSize":"22px"}
    },
    yAxis: {
        title: {
            text: 'Contacts',
            },
        //tickInterval:5,
    },
    /*xAxis:{
        type:'datetime',
        labels: {
            format: '{value:%d %b}',
    },
    },*/
    legend: {
        align:'right',
        verticalAlign:'top',
        margin:20
    },

    plotOptions: {
        series: {
        label: {
            connectorAllowed: false
                },
}
},

series: [{
    name: 'total',
    data: [14, 2, 9, 10, 12, 13, 6, 6, 16, 8, 10, 16, 15, 16, 17, 2, 1, 5, 16, 8, 4, 12, 15, 15, 16, 3, 15, 14, 15, 14, 6, 3, 16, 5, 3, 1, 17, 9, 6, 6, 16, 6, 12, 4, 5, 11, 5, 13, 7, 3, 3, 10, 5, 9, 15, 3, 2, 13, 16, 16, 9, 12, 9, 15, 8, 12, 15, 7, 3, 4, 4, 1, 17, 15, 12, 4, 17, 16, 8, 6, 1, 10, 6, 13, 9, 11, 15, 10, 6, 5],
    color:'#1580AD',
    pointStart:Date.UTC(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()),
    pointInterval: 24 * 36e5
},],

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

export function getSeries_leadScore(days)
{
    return {series: [{
        name: 'total',
        data: [14, 2, 9, 10, 12, 13, 6, 6, 16, 8, 10, 16, 15, 16, 17, 2, 1, 5, 16, 8, 4, 12, 15, 15, 16, 3, 15, 14, 15, 14, 6, 3, 16, 5, 3, 1, 17, 9, 6, 6, 16, 6, 12, 4, 5, 11, 5, 13, 7, 3, 3, 10, 5, 9, 15, 3, 2, 13, 16, 16, 9, 12, 9, 15, 8, 12, 15, 7, 3, 4, 4, 1, 17, 15, 12, 4, 17, 16, 8, 6, 1, 10, 6, 13, 9, 11, 15, 10, 6, 5].reverse().slice(0,days).reverse(),
        color:'#1580AD',
        //pointStart:Date.UTC(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()),
        //pointInterval: 24 * 36e5
    }]};
}

export var leadScore_data={
    'Contacts':297
}
export var leadScore_colours=['#1580AD'];
/*export var series_leadScore={
    series: [{
    name: 'total',
    data: [14, 2, 9, 10, 12, 13, 6, 6, 16, 8, 10, 16, 15, 16, 17, 2, 1, 5, 16, 8, 4, 12, 15, 15, 16, 3, 15, 14, 15, 14, 6, 3, 16, 5, 3, 1, 17, 9, 6, 6, 16, 6, 12, 4, 5, 11, 5, 13, 7, 3, 3, 10, 5, 9, 15, 3, 2, 13, 16, 16, 9, 12, 9, 15, 8, 12, 15, 7, 3, 4, 4, 1, 17, 15, 12, 4, 17, 16, 8, 6, 1, 10, 6, 13, 9, 11, 15, 10, 6, 5],
    color:'#1580AD',
    //pointStart:Date.UTC(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()),
    //pointInterval: 24 * 36e5
}]
};*/

export var options_waitingOldest={
    chart:{type:'line'},
    title: {
        text: '',
        align:'left',
        margin:30,
        style:{"fontSize":"22px"}
    },
    yAxis: [{ //--- Primary yAxis
        title: {
            text: 'Waiting(count)',
        },
        //tickInterval:100
        }, { //--- Secondary yAxis
        title: {
            text: 'Oldest(in days)',
        },
        tickInterval:1,
        opposite: true
    }],
    /*xAxis:{
        type:'datetime',
        labels: {
            format: '{value:%d %b}',
    }
    },*/
    legend: {
        align:'right',
        verticalAlign:'top',
        margin:20
    },

    plotOptions: {
        series: {
        label: {
            connectorAllowed: false
                },
        //pointStart: Date.UTC(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()),
        //pointInterval: 24 * 36e5
}
},
tooltip:{
    shared:true
},

series: [{
    yAxis: 0,
        name:'Waiting',
        data: [165, 105, 227, 189, 148, 179, 198, 122, 100, 101, 116, 138, 93, 81, 191, 87, 167, 58, 199, 46, 45, 84, 159, 82, 205, 212, 186, 215, 212, 45, 176, 138, 110, 115, 87, 171, 54, 197, 53, 115, 211, 81, 165, 64, 122, 68, 112, 201, 86, 223, 159, 43, 67, 78, 85, 185, 50, 184, 160, 175, 189, 48, 73, 211, 124, 72, 142, 90, 229, 107, 117, 200, 100, 42, 225, 134, 223, 49, 95, 69, 184, 214, 73, 164, 204, 118, 109, 167, 62, 185],
        color:'#1580AD',
        type:'column',
    },{
    yAxis: 1,
        name:'Oldest',
        data: [3, 2.12, 2.04, 2, 2.71, 2.79, 2.54, 3.29, 2.88, 3.17, 2.08, 2.58, 2.5, 2.38, 2.33, 2.92, 2.83, 2.83, 2.67, 3.08, 3.38, 3.04, 2.08, 2.08, 3.29, 3, 3.08, 2.75, 2.21, 2.12, 2.38, 2.38, 2.96, 3.08, 2.38, 2.17, 2.42, 2.08, 2.67, 3.29, 3.25, 2.75, 3.04, 2.25, 2.29, 3.42, 2.38, 3.12, 2.75, 3.04, 3.38, 3.29, 2.58, 2.67, 2.54, 2.38, 2.17, 2.17, 2.29, 3.04, 2.96, 2.71, 2.58, 2.42, 2.29, 2.17, 3.29, 2.71, 2.25, 2.46, 3.17, 2.04, 2.38, 2.75, 2.96, 2.67, 3.33, 3.33, 2.96, 3.25, 2.88, 2.88, 3.08, 2, 2.04, 2.12, 3.04, 2.88, 2.96, 3.35],
        color:'#71F7F8',
        type:'line',
},
],

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

export function getSeries_waitingOldest(days)
{
    return {
        series:[{
            yAxis: 0,
                name:'Waiting',
                data: [165, 105, 227, 189, 148, 179, 198, 122, 100, 101, 116, 138, 93, 81, 191, 87, 167, 58, 199, 46, 45, 84, 159, 82, 205, 212, 186, 215, 212, 45, 176, 138, 110, 115, 87, 171, 54, 197, 53, 115, 211, 81, 165, 64, 122, 68, 112, 201, 86, 223, 159, 43, 67, 78, 85, 185, 50, 184, 160, 175, 189, 48, 73, 211, 124, 72, 142, 90, 229, 107, 117, 200, 100, 42, 225, 134, 223, 49, 95, 69, 184, 214, 73, 164, 204, 118, 109, 167, 62, 185].reverse().slice(0,days).reverse(),
                color:'#1580AD',
                type:'column',
            },{
            yAxis: 1,
                name:'Oldest',
                data: [3, 2.12, 2.04, 2, 2.71, 2.79, 2.54, 3.29, 2.88, 3.17, 2.08, 2.58, 2.5, 2.38, 2.33, 2.92, 2.83, 2.83, 2.67, 3.08, 3.38, 3.04, 2.08, 2.08, 3.29, 3, 3.08, 2.75, 2.21, 2.12, 2.38, 2.38, 2.96, 3.08, 2.38, 2.17, 2.42, 2.08, 2.67, 3.29, 3.25, 2.75, 3.04, 2.25, 2.29, 3.42, 2.38, 3.12, 2.75, 3.04, 3.38, 3.29, 2.58, 2.67, 2.54, 2.38, 2.17, 2.17, 2.29, 3.04, 2.96, 2.71, 2.58, 2.42, 2.29, 2.17, 3.29, 2.71, 2.25, 2.46, 3.17, 2.04, 2.38, 2.75, 2.96, 2.67, 3.33, 3.33, 2.96, 3.25, 2.88, 2.88, 3.08, 2, 2.04, 2.12, 3.04, 2.88, 2.96, 3.35].reverse().slice(0,days).reverse(),
                color:'#71F7F8',
                type:'line',
        }]
    };
}

export var waitingOldest_data={
    "Current waiting in queue":138,
    "Oldest contact in current queue":'1d 9h'
}

export var waitingOldest_colours=['#1580AD','#71F7F8']
/*export var series_waitingOldest={
    series:[{
        yAxis: 0,
            name:'Waiting',
            data: [165, 105, 227, 189, 148, 179, 198, 122, 100, 101, 116, 138, 93, 81, 191, 87, 167, 58, 199, 46, 45, 84, 159, 82, 205, 212, 186, 215, 212, 45, 176, 138, 110, 115, 87, 171, 54, 197, 53, 115, 211, 81, 165, 64, 122, 68, 112, 201, 86, 223, 159, 43, 67, 78, 85, 185, 50, 184, 160, 175, 189, 48, 73, 211, 124, 72, 142, 90, 229, 107, 117, 200, 100, 42, 225, 134, 223, 49, 95, 69, 184, 214, 73, 164, 204, 118, 109, 167, 62, 185],
            color:'#1580AD',
            type:'column',
        },{
        yAxis: 1,
            name:'Oldest',
            data: [3, 2.12, 2.04, 2, 2.71, 2.79, 2.54, 3.29, 2.88, 3.17, 2.08, 2.58, 2.5, 2.38, 2.33, 2.92, 2.83, 2.83, 2.67, 3.08, 3.38, 3.04, 2.08, 2.08, 3.29, 3, 3.08, 2.75, 2.21, 2.12, 2.38, 2.38, 2.96, 3.08, 2.38, 2.17, 2.42, 2.08, 2.67, 3.29, 3.25, 2.75, 3.04, 2.25, 2.29, 3.42, 2.38, 3.12, 2.75, 3.04, 3.38, 3.29, 2.58, 2.67, 2.54, 2.38, 2.17, 2.17, 2.29, 3.04, 2.96, 2.71, 2.58, 2.42, 2.29, 2.17, 3.29, 2.71, 2.25, 2.46, 3.17, 2.04, 2.38, 2.75, 2.96, 2.67, 3.33, 3.33, 2.96, 3.25, 2.88, 2.88, 3.08, 2, 2.04, 2.12, 3.04, 2.88, 2.96, 3.35],
            color:'#71F7F8',
            type:'line',
    }]
};*/