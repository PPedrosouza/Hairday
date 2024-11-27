import dayjs from 'dayjs';
import { openingHours } from '../../utils/opening-hours.js'
import { hoursClick } from '../form/hours-click.js'

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
    // limpa a lista de horarios
    hours.innerHTML = ""

    // obtém a lista de todos os horários ocupados.
    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm"))
    
    const opening = openingHours.map((hour) => {
        const [scheduleHour] = hour.split(":")

        // add a hora na date e verificar se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())

        const available = !unavailableHours.includes(hour) && !isHourPast
        
        // console.log(isHourPast, available);
        
        return {
            hour,
            available
        }

    })

    // rendereizar os horários 
    // biome-ignore lint/complexity/noForEach: <explanation>
    opening.forEach(({ hour, available }) => {
        const li = document.createElement("lie")

        li.classList.add('hour')
        li.classList.add(available ? 'hour-available' : 'hour-unavailable')

        li.textContent = hour

        if (hour === '9:00') {
            hourHeaderAdd("Manhã")
        } else if (hour === '13:00') {
            hourHeaderAdd("Tarde")
        } else if (hour === '18:00') {
            hourHeaderAdd("Noite")
        }

        hours.append(li)
    })

    // add o evento de clique nos horarios disponiveis
    hoursClick()

}

function hourHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add('hour-period')
    header.textContent = title

    hours.append(header)
}