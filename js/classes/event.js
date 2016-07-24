
function Event(startTime, endTime, name, color, xRange, x, y)  {
  this.startTime = startTime
  this.endTime = endTime
  this.name = name

  // width calculated from the calender date
  // day starts at 1 am and ends at 12 pm
  // Width should map to time passed for event
  var calculatedWidth = Math.abs((this.endTime.getHours() * 60 + this.endTime.getMinutes())
                      - this.startTime.getHours() * 60 + this.startTime.getMinutes()) / 24

  // We know that 1 am is the beginning of the day in this
  // calender, so hour x == 0 should be the 1 am

  // 1am ================================== 12am
  var offset = (this.startTime.getHours() - 1) * 60 + this.startTime.getMinutes()

  //console.log(range);
  console.log("Width: " + calculatedWidth);

  this.svg = {
    rect: d3.select("svg")
              .append("rect")
                .attr("x", xRange(this.startTime))
                .attr("y", y)
                .attr("width", calculatedWidth + 30)
                .attr("height", 25)
                .attr("fill", color),
    text: d3.select("svg")
              .append("text")
                .style("class", "btn")
                .text(this.name)
                .attr("x", xRange(this.startTime))
                .attr("y", y + 25/2)
                .attr("fill", "black")

  }

}
