import dayjs from 'dayjs';
import { openingHours } from '../../utils/opening-hours.js'

export function hoursLoad({ date }) {
    const opening = openingHours.map((hour) => {
        const [scheduleHour] = hour.split(":")
        
        // add a hora na date e verificar se está no passado
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
        return {
            hour,
            available: isHourPast,
        }
        
    })

    console.log(opening);
    
}