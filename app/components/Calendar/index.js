import React from 'react'
require('./style.css')

const Calendar = () => {
  $(function() {
    var timeline = new Timeline()
    timeline.addEvent(new Date(2016, 23, 7, 12, 0), new Date(2016, 23, 7, 1, 0), "HI", "red");
    timeline.addEvent(new Date(2016, 23, 7, 8, 0), new Date(2016, 23, 7, 18, 0), "Meet and Greet", "blue")
  })
  return (
    <div>
      <svg id="svgVisualize" width="1500" height="1000"></svg>
    </div>
  )
}

export default Calendar
