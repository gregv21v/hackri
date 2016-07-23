
function Event(startTime, endTime)  {
  this.startTime = startTime
  this.endTime = endTime


  this.svg = d3.select("svg")
                .append("rect")
                .attr("x", 0)
                .attr("y", 0)
                .attr("width", 100)
                .attr("height", 50)

}
