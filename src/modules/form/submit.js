import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { scheduleDays } from "../schedules/load.js"

const form = document.querySelector("form")
const selectedDate = document.getElementById("date")
const clientName = document.getElementById("client")

// data atual para formatar o input
const inputToday = dayjs(new Date()).format('YYYY-MM-DD')

// carrega a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        // recuperando o nome do cliente
        const name = clientName.value.trim()
        if (!name) {
            return alert("Informe o nome do cliente!")
        }

        // recupera a horario selecionado
        const hourSelected = document.querySelector('.hour-selected')

        if (!hourSelected) {
            return alert("Selecione a hora!")
        }

        // recuperar somente a hora
        const [hour] = hourSelected.innerText.split(":")

        // inserir a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // gerar um id
        const id = new Date().getTime()

        // faz o agendamento
        await scheduleNew({
            id,
            name,
            when
        });

        // limpa o input de nome do client
        clientName.value = ""

        // recarrega o agendamento
        await scheduleDays()
    } catch (error) {
        alert("Não foi possível realizar o agendamento.")
        console.log(error);

    }
}