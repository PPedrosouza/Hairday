import {scheduleDays} from './schedules/load.js'

// biome-ignore lint/complexity/useArrowFunction: <explanation>
document.addEventListener("DOMContentLoaded", function () {
    scheduleDays()
    
})