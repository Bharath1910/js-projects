const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

function getJoke() {
    fetch("https://v2.jokeapi.dev/joke/Any?type=single")
        .then(response => response.json())
        .then(data => {
            joke.innerText = data.joke
        })
        .catch(err => console.log(err))
}

window.addEventListener('load', event => {
    getJoke()
}, {once: true})

jokeBtn.addEventListener('click', event => {
    getJoke()
})