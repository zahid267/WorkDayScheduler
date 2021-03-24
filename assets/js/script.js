var today = moment();
var currh = today.format("H");  /// 1 to 24 
var currM = "";
var currentDayEl = $("#currentDay");
var saveBtnEl = $("button");
var textareaEl = $("textarea");
var rowEl = ""; var rowid = "";

var activityEl = "";  var activity = "";  var activityid = ""
var mhours = [9, 10 , 11, 12, 13, 14, 15, 16, 17]; // Militry hours
var dayHours = ["9am", "10am", "11am", "12am", "1pm", "2pm", "3pm", "4pm", "5pm"]
var currDate = "";
var hSlot = 0;  var prevHour = 0
// handle displaying the time
function displayTime() {
  currDate = moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
  currentDayEl.html(currDate);
  currM = moment().format('m');
  currh = parseInt(moment().format("H"));
  if(parseInt(currM)+0 === 0 && currh > prevHour){ /// This check is set the active hour automatically
    setBGClass();
  }
}
function fillActivities(){
  for(var i=0; i< dayHours.length; i++){
    activityid = "activity_"+dayHours[i];
    activityEl = $("#"+activityid);
    activity = localStorage.getItem(activityid);
    activityEl.html(activity);
  }
}
function setBGClass(){
  currh = moment().format("H");
  currh = parseInt(currh);
  for(var i=0; i< dayHours.length; i++){
    rowid = "row_"+dayHours[i];
    rowEl = $("#"+rowid);
    rowEl.removeClass();
    hSlot = parseInt(mhours[i])
    //console.log(currh + " --- " + hSlot)
    if(currh === hSlot){ 
      rowEl.addClass('present');
      prevHour = currh;
      //console.log(currh + " === " + hSlot)
    }else if(currh < hSlot){
      rowEl.addClass('future');
    }else{
      rowEl.addClass('past');
    }

  }
}
function saveActivity(timeval){
  activityid = "activity_"+timeval;
  activityEl = $("#"+activityid);
  activity = activityEl.val();
 // console.log("activity : " + activity);
  localStorage.setItem(activityid, activity);
}
saveBtnEl.click(function(event){
 // var hoday = event.target.getAttribute('data-time');/// Hour of the day
  var hoday = event.target.parentNode.getAttribute('data-time');/// Hour of the day
 // console.log("hoday : "+hoday);
  saveActivity(hoday);
});

textareaEl.keydown(function(event){
  if(event.keyCode === 13){
    event.preventDefault();
    var fldid = event.target.id;
    var timeid = (fldid.split('_'))[1];
    saveActivity(timeid);
  }
});

fillActivities();
setBGClass();

setInterval(displayTime,1000);