export function hoursClick() {
    const hours = document.querySelectorAll('.hour-available')

    // biome-ignore lint/complexity/noForEach: <explanation>
    hours.forEach((available) => {
        available.addEventListener("click", (selected) => {

            // remove a classe hour-selected de todas as li n selecionadas
            // biome-ignore lint/complexity/noForEach: <explanation>
            hours.forEach((hour) => {
                hour.classList.remove("hour-selected")
            })

            // add a classe na li clicada
            selected.target.classList.add("hour-selected")
        })
    })

}