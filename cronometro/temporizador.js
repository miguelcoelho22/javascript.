const btnstart = document.querySelector('#btn-start')

btnstart.addEventListener('click', () => {
    const hours = document.querySelector('#hour')
    const minutes = document.querySelector('#minute')
    const seconds = document.querySelector('#second')

    let duration = parseInt(hours.value * 3600) + parseInt(minutes.value * 60) + parseInt(seconds.value)

    const display = document.querySelector('#timer')

    timer(duration, display)
})

function timer(duration, display) {
    let timer = duration
    let hours, minutes, seconds

    setInterval(() => {
        hours = math.floor((duration / 60) / 60)
        minutes = math.floor((duration / 60))
        seconds = duration
    }, 1000);

}