function openNav() {
  document.getElementById("sidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("sidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

const content = document.getElementById("content");

function getImgs() {
  fetch(`http://localhost:3000/imgs`)
    .then(function (body) {
      return body.json();
    })
    .then(function (img) {
      // img.forEach(createHomeImg);
      img.forEach(createRadioBtn);
      img.forEach(renderImg);
    });
}
getImgs();

// function createHomeImg(img){
//   const imgDiv = document.createElement("div");
//   imgDiv.className = "img-div";
//   content.appendChild(imgDiv);
//   const imgElement = document.createElement("img")
//   if(img.headline){
//     imgElement.src = `${img.src}`
//   }
//   imgDiv.appendChild(imgElement);
// }

//creates the slider divs then calls on creating radio btn
// function renderImgSlider(){
const sliderDiv = document.createElement("div");
sliderDiv.className = "slider";
content.appendChild(sliderDiv);
const slidesDiv = document.createElement("div");
slidesDiv.className = "slides";
sliderDiv.appendChild(slidesDiv);
const radioInputsDiv = document.createElement("div");
radioInputsDiv.className = "radio-inputs";
// }
// renderImgSlider()

function createRadioBtn(img) {
  const radioBtn = document.createElement("input");
  radioBtn.type = "radio";
  radioBtn.name = "radio-btn";
  radioBtn.id = `radio${img.id}`;
  slidesDiv.appendChild(radioBtn);
}

//has to go after radio btns
//creating divs & img tags for each img
function renderImg(img) {
  const slideDiv = document.createElement("div");
  slideDiv.className = "slide";
  slideDiv.id = `slide${img.id}`;
  slidesDiv.appendChild(slideDiv);
  const imgTag = document.createElement("img");
  imgTag.src = `${img.src}`;
  slideDiv.appendChild(imgTag);
  createAutoBtn(img);
  createManualBtn(img);
}

//******create automatic navigation to go after last div "slide" ^
const navAutoDiv = document.createElement("div");
navAutoDiv.className = "navigation-auto";
slidesDiv.appendChild(navAutoDiv);

//all 4 go inside navigation-auto
function createAutoBtn(img) {
  const autoBtnDiv = document.createElement("div");
  autoBtnDiv.className = `auto-btn${img.id}`;
  navAutoDiv.appendChild(autoBtnDiv);
}

const navManualDiv = document.createElement("div");
navManualDiv.className = "navigation-manual";
sliderDiv.appendChild(navManualDiv);

function createManualBtn(img) {
  const manualBtn = document.createElement("label");
  manualBtn.htmlFor = `radio${img.id}`;
  manualBtn.className = `manual-btn`;
  navManualDiv.appendChild(manualBtn);
}


var counter = 1;

setInterval(function(){
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if(counter > 4){
    counter = 1;
  }
}, 5000);