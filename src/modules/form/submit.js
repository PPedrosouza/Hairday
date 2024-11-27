import dayjs from "dayjs"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")

// data atual para formatar o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// carrega a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) =>{
    event.preventDefault()

    console.log("ENVIADO!")
}