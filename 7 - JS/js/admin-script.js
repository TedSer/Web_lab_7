'use strict'

let buttonAddNews = document.getElementById("addNews");
buttonAddNews.onclick = onClick;


function onClick() {

    let newsInput = document.getElementById("newsInput");
    let titleInput = document.getElementById("titleInput");

    if (newsInput.value == "" || titleInput.value == "") {
        alert("Наявні пусті поля!")
    } else if (titleInput.value.length > 50) {
        alert("Занадто довгий заголовок!");
    } else {
        
        newsInput.value = "";
        titleInput.value = "";
    }
}
