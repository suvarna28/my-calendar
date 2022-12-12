var currentDay = $('#currentDay');
var saveButton = $('button');

$(function () {
  currentDay.text(dayjs().format('dddd, MMMM D'));
  var currentHour = dayjs().hour();
  for (var i = 9; i < 18; i++){
    $('#hour-'+i).find("textarea").val(localStorage.getItem('#hour-'+i));
    if(i < currentHour){
      $('#hour-'+i).addClass('past');
    } else if (i == currentHour){
      $('#hour-'+i).addClass('present');
    } else {
      $('#hour-'+i).addClass('future');
    }
  }

  saveButton.click(function (e) { 
    e.preventDefault();
    var currentHrId = $(this).parent('div').attr('id');
    var textAreaValue = $('#'+currentHrId).find("textarea").val();
    localStorage.setItem('#'+currentHrId,''+textAreaValue);
  }); 
});


