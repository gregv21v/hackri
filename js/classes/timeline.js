function Timeline(y, height) {
  this.events = [];
  this.yStart = y; // the first row for the first event
  this.lastYOffset = y;
  this.eventHeight = 25;


  var vis = d3.select("#svgVisualize");

  this.xRange = d3.time.scale()
                  .range([20, 1450]) // start and end x values
                  .domain([new Date(2016, 23, 7, 1), new Date(2016, 23, 7, 24)]); // start and end date
  this.xAxis = d3.svg.axis().scale(this.xRange)
                           .ticks(24)
                           .tickFormat(d3.time.format("%I:%M %p"));

  this.ticks = vis.append("svg:g")
                    .call(this.xAxis)
                    .attr("transform", "translate(0, " + y + " )")
                    .attr("class", "axis")
  // tick text
  this.ticks.selectAll("text")
    .style("font-size", 10)
    .style("text-anchor", "end")
    .attr("dx", "-.8em")
    .attr("dy", "-.5em")
    .attr("transform", "rotate(90)")

  // tick lines
  this.ticks.selectAll("line")
    .attr("y2", height)


                                      //.attr("dx", "-.8em")
                                      //.attr("dy", ".15em")

  /* Smaller Ticks
  var xAxis2 = d3.svg.axis().scale(xRange)
                          .ticks(24 * 30)
                          .innerTickSize(-100)*/
}
/*
  Adds and creates an event
*/
Timeline.prototype.addEvent = function (startTime, endTime, name, color) {
  this.events.push(new Event(startTime, endTime, name, color, this.xRange, this.lastYOffset))
  this.lastYOffset += 25;
};

/*
  Different from add event as it moves an already existing event
*/
Timeline.prototype.moveTo = function (evnt) {
  // cascade events from the top of the Timeline
  this.events.push(evnt)

  // update the events locations
  for (var i = 0; i < this.events.length; i++) {
    this.events[i].updateY(this.yStart + i * 25)
  }

};

Timeline.prototype.moveFrom = function (evnt) {
  var removedEvent = this.remove(evnt.id)

  // update the events locations
  for (var i = 0; i < this.events.length; i++) {
    this.events[i].updateY(this.yStart + i * 25)
  }
};


Timeline.prototype.remove = function (id) {
  var evnt = null
  var index = -1;
  for(var i = 0; i < this.events.length; i++) {
    if(this.events[i].id == id) {
      index = i
      evnt = this.events[i];
    }
  }

  if(index > -1) {
    this.events.splice(index, 1)
  }

  return evnt;
};




Timeline.prototype.getSelected = function () {
  var selected = []
  for(var i = 0; i < this.events.length; i++) {
    if(this.events[i].selected == true) {
      selected.push(this.events[i])
    }
  }
  return selected;
};
