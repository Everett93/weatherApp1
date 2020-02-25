function myDate() {
    var d = new Date();
    var n = d.toJSON();
    var day = $("#currentDay");
    day.text(n);
    day.append(n);

};










function getSchedule(){
    
    
    // use JSON.parse and localStorage.get to retrive schedule
    // create schedule if it doesn't exist already
    // (moment.js) for each item in schedule set the status to present, past, or future depending on time of day
    return schedule
  }
  function saveSchedule(schedule){
    // localStorage.setItem and JSON.stringify
  }
  function renderSchedule(schedule){
    // get rid of everything
    $("#main").empty()
    // for each hour in the schedule, create a div with the bootstrap class 'row'
  
  var pm = ['12','1','2','3','4','5','6','7','8','9','10','11']
  for(var i = 0; i < pm.length; i++);
  var hrs = $("<div>");
  hrs.addClass("row");
  hrs.attr("row" + pm[i]);
  hrs.text(pm[i] + "Pm");
  $(".row").append(hrs);
  
  $("<div>").append(".col");
  $("<div>").append(".col");
  $("<div>").append(".col");
    // append 3 divs with the bootstrap 'col' classes to the above row 
    // these keep hour, text, and save button
    // I color the text column depending on status
    $("#main").append($("<div>your row goes here<button class='save-btn'>save</button></div>"))
    // set on click handler for each save button
    $(".save-btn").click(function(event) {
      // I have a data attribute called hour on each of my buttons
      // inside the click handler I navigate the tree using .parent() and .children to find my textarea
      // and I set the hour to the value of the textarea
      saveSchedule(schedule)
    })
  }
  function main() {
    let schedule = getSchedule()
    renderSchedule(schedule)
  }
  $(document).ready(main)