// document.querySelector('button').addEventListener('click', getFetch)

let url = `https://api.nasa.gov/planetary/apod?api_key=71LrDepajiM2fYdRzs0jbvRcsebUtvKkQuiW76Kz`


// function getFetch(){
//     const choice = document.querySelector('input').value
//      url = `https://api.nasa.gov/planetary/apod?api_key=71LrDepajiM2fYdRzs0jbvRcsebUtvKkQuiW76Kz&date=${choice}`
//     fetch(url)
//     //handle the response
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         document.querySelector('.date').innerText = data.date
//         document.querySelector('.nasa-image').src = data.hdurl
//         document.querySelector('.title').innerText = data.title
//         document.querySelector('h4').innerText = data.explanation
//     })
//     .catch(error => {
//     console.log(error)
// })
// }

// window.onload = () => {
//     fetch(url).then(r=>r.json()).then(data => 
//     {
//       console.log(data)
//       document.querySelector('.date').innerText = data.date
//       document.querySelector('.nasa-image').src = data.hdurl
//       document.querySelector('.title').innerText = data.title
//       document.querySelector('h4').innerText = data.explanation
//       //use data
//      });
//   };

//     document.querySelector('.date').innerText = data.date
//     document.querySelector('.nasa-image').src = data.hdurl
//     document.querySelector('.title').innerText = data.title
//     document.querySelector('h4').innerText = data.explanation


  function fetchData() {
    // Retrieve all data within a 1 week range
    let endDate = new Date();
    let startDate = new Date();
    startDate.setDate(startDate.getDate() - 13)
    
    // Convert startDate to YYYY-MM-DD format
    const yearStart = startDate.getFullYear();
    const monthStart = String(startDate.getMonth() + 1).padStart(2, "0");
    const dayStart = String(startDate.getDate()).padStart(2, "0");
    const startDateFormatted = yearStart + "-" + monthStart + "-" + dayStart;
  
    // Convert endDate to YYYY-MM-DD format
    const yearEnd = endDate.getFullYear();
    const monthEnd = String(endDate.getMonth() + 1).padStart(2, "0");
    const dayEnd = String(endDate.getDate()).padStart(2, "0");
    const endDateFormatted = yearEnd + "-" + monthEnd + "-" + dayEnd;
  
    const apiData = fetch(
      url + `&start_date=${startDateFormatted}&end_date=${endDateFormatted}`
    )
    .then((response) => response.json())
    .then((fetchData) => {
        
        for(let i = fetchData.length -1; i > 0 ; i--){
            const newDiv = document.createElement("div")
            let word = document.createElement('h1')
            let para = document.createElement('p')
            let nasaImg = document.createElement('img')
            let detailsBtn = document.createElement('button')


            detailsBtn.innerText = 'Show details'
            word.innerText = fetchData[i].title
            para.innerText = fetchData[i].explanation
            nasaImg.src = fetchData[i].hdurl
            newDiv.className = 'card'
            nasaImg.className = 'nasa-image'
            para.className = 'details'
            

            newDiv.appendChild(nasaImg)
            newDiv.appendChild(word)
            newDiv.appendChild(detailsBtn)
            newDiv.appendChild(para)


            detailsBtn.addEventListener('click', ()=> {
                para.classList.toggle("display")
                if(detailsBtn.innerText == 'Hide Details'){
                    detailsBtn.innerText = 'Show Details'
                } else {
                    detailsBtn.innerText = 'Hide Details'
                }           
            })

            const currentDiv = document.getElementById("div1");
            currentDiv.appendChild(newDiv)
        }
        //fetchData;
    });
    return apiData;
  }


  fetchData();