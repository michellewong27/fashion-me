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
    img.forEach(createHomeImg)
  })
}
getImgs();

function createHomeImg(img){
  const imgDiv = document.createElement("div");
  imgDiv.className = "img-div";
  content.appendChild(imgDiv);
  const imgElement = document.createElement("img")
  if(img.headline){
    imgElement.src = `${img.src}`
  }
  imgDiv.appendChild(imgElement);
}
