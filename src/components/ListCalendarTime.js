import React from "react"
import CalendarTime from "./CalendarTime"

// Dans une fonction (avec un test)
// 1 transform timeSlot.time to a luxon interval
// 2 renvoyer la période d'un interval ex: si l'intervalle finit avant midi on renvoit "MATIN"
// Steps: creéer l'intervalle de la période et tester si ça engulfs

const ListCalendarTime = ({ timeSlots, selectTimeSlot }) => (
  <div
    style={{
      display: "block",
      paddingRight: "11px"
    }}
  >
    {timeSlots.map((timeSlot, index) => (
      <CalendarTime
        timeSlot={timeSlot}
        key={index}
        selectTimeSlot={selectTimeSlot}
      />
    ))}
  </div>
)

export default ListCalendarTime
