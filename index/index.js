var date;

var requisicao = new XMLHttpRequest();
var responseOBJ;


function request() {


    date = document.querySelector("input").value

    requisicao.open("GET", `https://api.nasa.gov/planetary/apod?api_key=6nCIEbLbYtiE1jUFigUHZ8ACvffqPRfZrdR0Qzvs&date=${date}`)

    requisicao.send();
}

requisicao.onload = function () {

    const picture = document.querySelector("#img")
    const text = document.querySelector("#texto")
console.log(picture)
console.log(text)


    if (requisicao.status == 200) {
        const response = requisicao.response;
        responseOBJ = JSON.parse(response);

        const texto = responseOBJ.explanation
        const img = responseOBJ.url

        picture.setAttribute("src",img)

        text.innerHTML = texto

        console.log(texto);
        console.log(img);


    }
}