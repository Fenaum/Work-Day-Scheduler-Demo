var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D YYYY, h:mm:ss a"));

var currentTime = dayjs().hour();
console.log(currentTime);

function setHourColors() {
  for (var i = 0; i < 18; i++) {
    if (i < currentTime) {
      $("#hour-" + i + " textarea").addClass("past");
    } else if (i == currentTime) {
      $("#hour-" + i + " textarea").addClass("present");
    } else if (i > currentTime) {
      $("#hour-" + i + " textarea").addClass("future");
    }
  }
}

function loadStoreData() {
    const eventsData = JSON.parse(localStorage.getItem("calenderEvents"));
}

function handleSaveClick(event) {
    event.preventDefault();
    var hourBlock = $(event.target).parent();
    var value = hourBlock.children("textarea").val();
    var hour  = hourBlock.attr('id').split("-")[1];
    localStorage.setItem("calendarEvents", JSON.stringify(eventsData));
}







loadStoreData();
setHourColors();
$('.saveButn').on('click',handleSaveClick);