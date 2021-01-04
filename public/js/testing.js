console.log("inside app.js");



const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherform.addEventListener('submit',(e)=>{

    e.preventDefault()
    const loc = search.value
    console.log(loc);
    const url = 'http://localhost:3000/weather?address='+loc

    messageOne.textContent = 'Loading....'
    messageTwo.textContent = ''

    fetch(url).then((response)=>{
    response.json().then((data)=>{
        if(data.error){
            console.log(data.error);
        }
        else{
            messageOne.textContent = data.response.rain
            messageTwo.textContent = data.response.temp
        }
    })
})
})