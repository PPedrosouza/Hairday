import { scheduleFetchByDay } from '../../services/schedule-fetch-by-day.js'
import { schedulesShow } from '../schedules/show.js'
import { hoursLoad } from '../form/hours-load.js'

// seleciona o input de data
const selectedDate = document.getElementById("date")

export async function scheduleDays() {
    // obtém a data do input
    const date = selectedDate.value

    // buscar na API os agendamentos
    const dailySchedules = await scheduleFetchByDay({ date })
    
    // exibe os agendamentos
    schedulesShow({ dailySchedules })

    // renderiza as horas disponíveis
    hoursLoad({ date, dailySchedules })
}