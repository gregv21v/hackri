import React from 'react'
require('./style.css')

const Calendar = () => {
  $(function() {
    var all = new AllTimelines();

    console.log(all);
  })
  return (
    <div>
      <svg id="svgVisualize" width="1500" height="1000"></svg>
    </div>
  )
}

export default Calendar
