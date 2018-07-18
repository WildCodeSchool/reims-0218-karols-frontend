import React from "react"
import ListCalendarTime from "./ListCalendarTime"
import CalendarDay from "./CalendarDay"
import { Scrollbars } from "react-custom-scrollbars"

const ListCalendarDayTime = ({ day, selectTimeSlot }) => (
  <div
    style={{
      margin: "0 6px",
      maxWidth: "75px",
      width: "20%"
    }}
  >
    <CalendarDay date={day.date} />
    <Scrollbars style={{ height: 360 }}>
      <ListCalendarTime
        timeSlots={day.timeSlots}
        selectTimeSlot={selectTimeSlot}
      />
    </Scrollbars>
  </div>
)

export default ListCalendarDayTime
