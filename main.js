document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
    const choice = document.querySelector('input').value
    const url = `https://api.nasa.gov/planetary/apod?api_key=71LrDepajiM2fYdRzs0jbvRcsebUtvKkQuiW76Kz&date=${choice}`
    fetch(url)
    //handle the response
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.querySelector('img').src = data.hdurl
        document.querySelector('h2').innerText = data.title
        document.querySelector('h4').innerText = data.explanation
    })
    .catch(error => {
    console.log(error)
})
}



