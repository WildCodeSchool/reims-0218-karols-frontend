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

const capitalizeFirstLetter = string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

const CalendarDay = ({ date, selected }) => (
  <div
    style={{
      textAlign: "center",
      marginBottom: "24px",
      fontSize: "13px",
      color: selected ? "#000" : "#435f71",
      fontWeight: selected ? "bold" : "normal",
      minHeight: "60px"
    }}
  >
    <p
      style={{
        textAlign: "center",
        marginBottom: "24px",
        fontSize: "12px"
      }}
    >
      {capitalizeFirstLetter(transformDay(date))}
      <br />
      {transformDate(date)}
    </p>
  </div>
)

export default CalendarDay
