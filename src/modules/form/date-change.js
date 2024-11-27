import { scheduleDays } from '../schedules/load.js'

// seleciona o input de data
const selectedDate = document.getElementById("date")

// recarregar a lista de horarios quando o input de data mudar
selectedDate.onchange = () => {
    scheduleDays()
}