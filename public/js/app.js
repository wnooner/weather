console.log('Client side javascript file is loaded')

fetch('http://puzzle.mead.io/puzzle').then((response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const htmlLocation = document.querySelector('.location-display')
const htmlData = document.querySelector('.data-display')


weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(search.value)

    htmlLocation.textContent = "Loading..."
    htmlData.textContent = ''

    fetch(`http://localhost:3000/weather?search=${search.value}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                htmlLocation.textContent = data.error
            } else {
                htmlLocation.textContent = data.location
                htmlData.textContent = data.forecast
            }
        })
    })
})