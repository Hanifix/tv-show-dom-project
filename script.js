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
    let rootElem = document.getElementById("root");
    //rootElem.textContent = `Got ${episodeList[0].id} episode(s)`;
    for (let i = 0; i < episodeList.length; i++) {
        let element = document.createElement("h1");
        let image = document.createElement("img");
        let text = document.createElement("p");
        element.textContent = `${episodeList[i].name} - S0${episodeList[i].season}E0${episodeList[i].number}`;
        image.src = episodeList[i].image.medium;
        text.textContent = episodeList[i].summary;
        rootElem.appendChild(element);
        rootElem.appendChild(image);
        rootElem.appendChild(text);
    }
    return rootElem;
}