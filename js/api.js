
fetch('https://fedeperin-harry-potter-api.herokuapp.com/personajes/', {

})
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })

