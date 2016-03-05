  google.load("visualization", "1.1", {packages:["bar"]});
//Drupal.behaviors.schoolauditGraphData = {
// attach: function (context, settings) {
  jQuery( document ).ready(function() {
  //jQuery(window).resize(function() {
  var datalist = Drupal.settings.audit.BaseUrl;
  //alert(datalist);
  var keys = [];
  x3 = datalist.split('_');
  for (var i = 0; i < x3.length; i++) {
    val = x3[i].split(',');
    if (i != 0){
      var v = [];
      for (j = 0; j < val.length; j++) {
        if(j == 0) {
          v.push(val[j]);
        }
        else {
          v.push(parseInt(val[j]));
        }
      }
      keys.push(v);
    }
    else {
      keys.push(val);
    }
  }
    var data = google.visualization.arrayToDataTable(keys);
    var options = {
      legend: {textStyle:{color:'"red"'}},
      chart: {
        title: 'School Audit',
       // subtitle: 'School Audit',
      },
      bars: 'horizontal',
      backgroundColor: '#000000',
      colors:['#00578A','#AA3030','#7DC30E'],
    };

  var chart = new google.charts.Bar(document.getElementById('barchart_material'));
  chart.draw(data, options);
  //});
  });
  //}
//};
