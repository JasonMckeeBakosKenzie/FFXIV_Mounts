let mountDiv = document.getElementById("mount-content");
let mountTitle = document.createElement("h2");
let mountImage = document.createElement("img");
let mountInfo = document.createElement("p");
let br = document.createElement("br");
let mountOwned = document.createElement("p");
let nextMount = document.createElement("button");
nextMount.classList.add("next-button")
nextMount.innerText = "Next Mount";
let br2 = document.createElement("br");
let prevMount = document.createElement("button");
prevMount.classList.add("prev-button")

prevMount.innerText = "Previous Mount";

let id = 0;

function mountFetch() {
  let url = `https://ffxivcollect.com/api/mounts/`;
  fetch(url)
    .then((response) => response.json())
    .then(displayData);
}

function displayData(response) {
  mountDiv.append(mountTitle, mountImage, mountInfo, nextMount, prevMount ,mountOwned);
  mountTitle.innerText = response.results[id].name;
  mountImage.src = response.results[id].image;
  mountInfo.innerText = response.results[id].enhanced_description;
  mountOwned.innerText = `Owned by ${response.results[id].owned} of the player base.`
  console.log(response.results[id]);
}

mountFetch();

function displayNextMount() {
  id += 1;
  mountFetch();
}

function displayPrevMount() {
    if (id > 0) {
        id -= 1;
        mountFetch();
    }
  }

nextMount.addEventListener("click", displayNextMount);
prevMount.addEventListener("click", displayPrevMount);
