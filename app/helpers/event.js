
function Event(startTime, endTime, name, color, xRange, x, y)  {
  this.startTime = startTime
  this.endTime = endTime
  this.name = name

  var barWidth = Math.abs(xRange(this.endTime) - xRange(this.startTime))

  this.svg = {
    rect: d3.select("svg")
              .append("rect")
                .attr("x", xRange(this.startTime))
                .attr("y", y)
                .attr("width", barWidth)
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
