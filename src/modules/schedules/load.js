import { hoursLoad } from '../form/hours-load.js'

// seleciona o input de data
const selectedDate = document.getElementById("date")

export function scheduleDays() {
    // obtém a data do input
    const date = selectedDate.value

    // renderiza as horas disponíveis
    hoursLoad({ date })
}