import { scheduleCancel } from "../../services/schedule-cancel"
import { scheduleDays } from "../schedules/load.js"

const periods = document.querySelectorAll(".period")
console.log(periods);

// gerar evento de cliock para cada lista (manhã, tarde e noite)
// biome-ignore lint/complexity/noForEach: <explanation>
periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if(event.target.classList.contains("cancel-icon")){
            // obtem a li pai do elemento clicado
            const item = event.target.closest("li")

            // pega o id do agendamento
            const { id } = item.dataset
            console.log(`Cancelando agendamento com ID: ${id}`);
            // confirma se o id foi selecionado
            if(id){
                // confirma se o usuario quer cancelar
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                if(isConfirm){
                    // faz a requisicao na API para cancelar
                    await scheduleCancel({id})

                    // recarrega os agendamentos
                    scheduleDays()
                }
            }

        }
    })
})