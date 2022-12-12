var currentDay = $('#currentDay');
var saveButton = $('button');

/* Function that displays current day, gets the id of the individual divs containing hrs and sets the
background colors to the divs with classes past, present and future depending on the hr of the day. 
Also retrieves data from local storage. */
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

  /* Function that gets called on clicking save button with lock icon. It gets the notes entered in 
  textarea and saves it to local storage.*/
  saveButton.click(function (e) { 
    e.preventDefault();
    var currentHrId = $(this).parent('div').attr('id');
    var textAreaValue = $('#'+currentHrId).find("textarea").val();
    localStorage.setItem('#'+currentHrId,''+textAreaValue);
  }); 
});


