var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D YYYY, h:mm:ss a"));
var currentTime = dayjs().hour();
console.log(currentTime);

(function setHourColors() {
  for (var i = 9; i < 18; i++) {
    if (i < currentTime) {
      $("#hour-" + i + " textarea").addClass("past");
    } else if (i == currentTime) {
      $("#hour-" + i + " textarea").addClass("present");
    } else if (i > currentTime) {
      $("#hour-" + i + " textarea").addClass("future");
    }
  }
})();

var eventsData = "";
var dataArray = [];
dataArray = JSON.parse(localStorage.getItem("calenderEvents"));

function loadStoreData() {
  eventsData = JSON.parse(localStorage.getItem("calenderEvents"));
};

$(".saveBtn").on('click', function(event) {
  event.preventDefault();
  loadStoreData();
  var hourBlock = $(event.target).parent();
  var val = hourBlock.children('textarea').val();
  var hour = hourBlock.attr('id').split('-')[1];
  dataArray[hour - 9] = val;
  eventsData = dataArray;
  localStorage.setItem('calenderEvents', JSON.stringify(eventsData));
});

