let options = {
    startAngle: -1.55,
    size: 150,
    value: 0.85,
    fill: {gradient: [' #2A3B47', ' #5361FF']}
  }
  $(".circle .bar").circleProgress(options).on('circle-animation-progress',
  function(event, progress, stepValue){
    $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
  });
  $(".js .bar").circleProgress({
    value: 0.70
  });
  $(".react .bar").circleProgress({
    value: 0.40
  });