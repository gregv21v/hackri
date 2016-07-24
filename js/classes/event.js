var lastId = 0;
function Event(startTime, endTime, name, color, xRange, y)  {
  this.startTime = startTime
  this.endTime = endTime
  this.name = name
  this.selected = false

  this.id = lastId
  lastId += 1

  var barWidth = Math.abs(xRange(this.endTime) - xRange(this.startTime))

  this.svg = {
    rect: d3.select("svg")
              .append("rect")
                .attr("x", xRange(this.startTime))
                .attr("y", y)
                .attr("width", barWidth)
                .attr("height", 25)
                .attr("fill-opacity", 0.5)
                .attr("fill", color),
    text: d3.select("svg")
              .append("text")
                .style("class", "btn")
                .text(this.name)
                .attr("x", xRange(this.startTime))
                .attr("y", y + 24/2)
                .attr("fill", "black")

  }

  var self = this;

  this.svg.rect.on("click", function() {
    // add to the users events
    self.selected = true;
    //self.svg.rect.attr("fill", "green")

    console.log("Id: " + self.id);
    //self.hide();
  })

}


Event.prototype.updateY = function (y) {
  this.svg.rect.attr("y", y);
  this.svg.text.attr("y", y + 24/2)
};

Event.prototype.hide = function () {
  this.svg.rect.attr("height", 0)
  this.svg.text.text("")
};

Event.prototype.show = function () {
  this.svg.rect.attr("height", 25)
  this.svg.text.text(this.name)
};
