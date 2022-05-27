var date;

var requisicao = new XMLHttpRequest();
var responseOBJ ;

let button = document.querySelector("button")




button.addEventListener("click", function () {


    date = document.querySelector("input").value

    requisicao.open("GET", `https://api.nasa.gov/planetary/apod?api_key=6nCIEbLbYtiE1jUFigUHZ8ACvffqPRfZrdR0Qzvs&date=${date}`)
    requisicao.send();
})

requisicao.onload = function () {

    if (requisicao.status == 200) {
        let response = requisicao.response;
        responseOBJ = JSON.parse(response);
        console.log(responseOBJ);
    }
}