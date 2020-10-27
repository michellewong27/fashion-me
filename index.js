function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

const content = document.getElementById("content");

function getImgs(){
  fetch(`http://localhost:3000/imgs`)
  .then(function (body){
    return body.json();
  })
  .then(function (img) {
    console.log(img)
    // img.forEach()
  })
}

function createHomeImg(){
  const imgDiv = document.createElement("div");
  imgDiv.className = "img-div";
  content.appendChild(imgDiv);

  const img = document.createElement("img")

}
