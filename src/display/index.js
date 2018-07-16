import { getSelectedTimeSlot } from "../resume/index"

// declaration of all functions that will determine if we want to show or not a section

// show services if a shop is selected
export const showServices = state =>
  state.shops.filter(shop => shop.selected).length > 0

// show sex if préparation is selected (the service with id 1)

export const showSex = state =>
  state.services.filter(service => service.selected && service.id === 1)
    .length > 0 ||
  state.services.filter(service => service.selected && service.id === 3)
    .length > 0

export const showFemalePrestation = state =>
  (state.genders.filter(gender => gender.selected && gender.sex === "F")
    .length > 0 &&
    showSex(state)) ||
  (state.genders.filter(gender => gender.count >= 1 && gender.sex === "F")
    .length > 0 &&
    state.services.filter(service => service.selected && service.id === 3)
      .length > 0)

export const showMalePrestation = state =>
  (state.genders.filter(gender => gender.selected && gender.sex === "M")
    .length > 0 &&
    showSex(state)) ||
  (state.genders.filter(gender => gender.count >= 1 && gender.sex === "M")
    .length > 0 &&
    state.services.filter(service => service.selected && service.id === 3)
      .length > 0)

export const showDatePicker = state =>
  (state.prestations.filter(
    prestation =>
      prestation.preparations.filter(preparation => preparation.selected)
        .length > 0
  ).length > 0 &&
    showSex(state)) ||
  state.services.filter(service => service.selected && service.id === 2)
    .length > 0

export const showCalendar = state => state.timeSlots.length >= 1

export const showForm = state => getSelectedTimeSlot(state)

export const showCountPeopleTable = state =>
  state.services.filter(service => service.selected && service.id === 2)
    .length > 0

export const showCounter = state =>
  state.services.filter(service => service.selected && service.id === 3)
    .length > 0 ||
  state.services.filter(service => service.selected && service.id === 2)
    .length > 0
