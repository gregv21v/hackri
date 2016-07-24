
/*
  The interface is the whole gui.
*/
function AllTimelines() {
  this.available = new Timeline(60, 240, "Events")
  this.selected = new Timeline(400, 300, "My Events")


  this.available.addEvent(new Date(2016, 23, 7, 12, 0), new Date(2016, 23, 7, 13, 0), "HI", "red");
  this.available.addEvent(new Date(2016, 23, 7, 8, 0), new Date(2016, 23, 7, 18, 0), "Meet and Greet", "orange")
  this.available.addEvent(new Date(2016, 23, 7, 9, 0), new Date(2016, 23, 7, 20, 0), "Meet and Greet", "blue")
  this.available.addEvent(new Date(2016, 23, 7, 2, 0), new Date(2016, 23, 7, 20, 0), "Meet and Greet", "pink")


  var self = this;
  d3.select("#svgVisualize").on("click", function() {
    self.update()
  })




}


AllTimelines.prototype.update = function () {

  // move events to your timeline
  var toMove = this.available.getSelected();
  for(var i = 0; i < toMove.length; i++) {
    toMove[i].selected = false;
    this.available.moveFrom(toMove[i])
    this.selected.moveTo(toMove[i])
  }

  // move events from your timeline
  var toMove = this.selected.getSelected();
  for(var i = 0; i < toMove.length; i++) {
    toMove[i].selected = false;
    this.selected.moveFrom(toMove[i])
    this.available.moveTo(toMove[i])
  }

};
