//You can edit ALL of the code here
function setup() {
    const allEpisodes = getAllEpisodes();
    makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
    const rootElem = document.getElementById("root");
    rootElem.textContent = `Got ${episodeList.length} episode(s)`;
}
//console.log(setup);
window.onload = setup;

// let hanif;
// hanif = window.navigator;
// console.log(hanif);

function makePageForEpisodes(episodeList) {
    const rootElem = document.getElementById("root");
    //rootElem.textContent = `Got ${episodeList[0].id} episode(s)`;
    for (let i = 0; i < episodeList.length; i++) {
        let container = document.createElement("div");
        let element = document.createElement("h4");
        let image = document.createElement("img");
        let text = document.createElement("p");
        element.textContent = `${episodeList[i].name} - S0${episodeList[i].season}E0${episodeList[i].number}`;
        image.src = episodeList[i].image.medium;
        text.innerHTML = `${
        episodeList[i].summary.length < 50
          ? episodeList[i].summary
          : episodeList[i].summary.substring(0, 400)
      }....`;
        element.classList.add("title");
        image.classList.add("image");
        text.classList.add("text");
        container.classList.add("container");

        container.appendChild(element);
        container.appendChild(image);
        container.appendChild(text);
        rootElem.appendChild(container);
    }

    return rootElem;
}
let filter, main, container, title, text, i, txtValue, pValue;
let input = document.getElementById("myInput");
input.addEventListener("keyup", function myFunction() {
    filter = input.value.toUpperCase();

    main = document.getElementById("root");
    container = main.getElementsByTagName("div");
    for (i = 0; i < container.length; i++) {
        title = container[i].getElementsByTagName("h4")[0];
        text = container[i].getElementsByTagName("p")[0];
        txtValue = title.textContent || title.innerText;
        pValue = text.textContent || text.innerText;
        if (
            txtValue.toUpperCase().indexOf(filter) > -1 ||
            pValue.toUpperCase().indexOf(filter) > -1
        ) {
            container[i].style.display = "";
        } else {
            container[i].style.display = "none";
        }
    }
});