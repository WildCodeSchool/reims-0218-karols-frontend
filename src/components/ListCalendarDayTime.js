import React from "react"
import ListCalendarTime from "./ListCalendarTime"
import CalendarDay from "./CalendarDay"
import { Scrollbars } from "react-custom-scrollbars"

const ListCalendarDayTime = ({ day, selectTimeSlot }) => (
  <div
    style={{
      flexGrow: "1",
      flexShrink: "0",
      flexBasis: "0px",
      margin: "0 6px",
      maxWidth: "75px"
    }}
  >
    <CalendarDay date={day.date} />
    <Scrollbars style={{ height: 380 }}>
      <ListCalendarTime
        timeSlots={day.timeSlots}
        selectTimeSlot={selectTimeSlot}
      />
    </Scrollbars>
  </div>
)

export default ListCalendarDayTime
