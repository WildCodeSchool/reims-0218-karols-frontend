import React from "react"
import { DateTime } from "luxon"

const transformDate = date =>
  DateTime.fromISO(date)
    .setLocale("fr")
    .toFormat("dd LLLL")

const transformDay = date =>
  DateTime.fromISO(date)
    .setLocale("fr")
    .toFormat("cccc")

const CalendarDay = ({ date, selected }) => (
  <div
    style={{
      textAlign: "center",
      marginBottom: "24px",
      fontSize: "13px",
      color: selected ? "#000" : "#435f71",
      fontWeight: selected ? "bold" : "normal"
    }}
  >
    <p style={{ fontWeight: "700" }} />
    <p
      style={{
        textAlign: "center",
        marginBottom: "24px",
        fontSize: "12px"
      }}
    >
      {transformDay(date)}
      <br />
      {transformDate(date)}
    </p>
  </div>
)

export default CalendarDay
