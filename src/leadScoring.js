export var options={
   chart: {
       type: 'line'
   },
   title: {
       text: '',
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
/*tooltip: {
   xDateFormat:'{value:%d %b}',
   formatter: function() {
           var s = '<b>'+ this.x +'</b><br/><span style="color:' + this.point.color + '">\u25CF</span> Contacts: ' + this.point.y;
           return s;
   },
},*/
series: [{
   name: '',
   data:[6,13,9,11,15,10,6,5],
   type:'area',
   color:'#1580AD',
   fillOpacity: 0.1,
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
       fillOpacity: 0.1,
       pointStart: Date.UTC(new Date().getFullYear(),new Date().getMonth(),new Date().getDate()),
       pointInterval: 24 * 36e5
       },]
};