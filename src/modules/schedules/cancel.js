const periods = document.querySelectorAll(".period")

// gerar evento de cliock para cada lista (manhã, tarde e noite)
// biome-ignore lint/complexity/noForEach: <explanation>
periods.forEach((period) => {
    period.addEventListener("click", (event) => {
        if(event.target.classList.contains("cancel-icon")){
            // obtem a li pai do elemento clicado
            const item = event.target.closest("li")
            const { id } = item.dataset
            
            if(id){
                const isConfirm = confirm("Tem certeza que deseja cancelar o agendamento?")

                if(isConfirm){
                    console.log("REMOVER!");
                    
                }
            }

        }
    })
})